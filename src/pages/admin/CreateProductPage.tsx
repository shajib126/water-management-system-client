import { useState } from "react";
import { useCreateProductMutation } from "../../redux/api/baseApi";
import { MutationError } from "../../utils/MutationError";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";


const CreateProductPage = () => {
  
  const [productName, setProductName] = useState("");
  const [image, setImage] = useState("");
  // const [productSize,setProductSize] = useState('')
  // const [sizeType,setSizeTYpe] = useState('')
  const [initialPrice, setInitialPrice] = useState<number | undefined>(0);
  const [createProduct] = useCreateProductMutation();
  const navigate = useNavigate();

  const imageChange = (e: any) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === "string") {
        setImage(reader.result);
      }
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleCreateProduct = async (e: React.FormEvent) => {
    e.preventDefault();
    const productInfo = {
      productName,
      initialPrice,
      image
    };
    const res = await createProduct(productInfo);
    const error = await MutationError(res);
    if (error) {
      toast.error(error);
    } else {
      toast.success("Product created");
      navigate("/admin/product");
    }
  };

  return (
    <div>
      <form
        onSubmit={handleCreateProduct}
        className="md:w-[50%] mx-auto p-8 h-[50vh] rounded-md "
      >
        <div>
          <label>Category Image</label>
          <br />
          <input
            type="file"
            name="image"
            accept="image/*"
            onChange={imageChange}
            className="file-input file-input-bordered file-input-primary w-full max-w-xs"
          />
        </div>
        <div className="p-2 mb-8">
          <label htmlFor="">Product Name</label>
          <br />
          <input
            onChange={(e) => setProductName(e.target.value)}
            className="border-2 border-black w-full p-2"
            type="text"
            placeholder="product name"
          />
        </div>
        <div className="p-2 mb-8">
          <label htmlFor="">Price</label>
          <br />
          <input
            onChange={(e) => setInitialPrice(parseInt(e.target.value))}
            className="border-2 border-black w-full p-2"
            type="number"
            placeholder="Price"
          />
        </div>
        <button
          type="submit"
          className="font-bold px-4 py-3  bg-lime-700 text-white rounded-md mt-4"
        >
          Create Product
        </button>
      </form>
      <Toaster />
    </div>
  );
};

export default CreateProductPage;
