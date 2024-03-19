import { useState } from "react";
import { useCreateCategoryMutation } from "../../redux/api/baseApi";

const CategoryPage = () => {
  const [category,setCategory] = useState('')
  const [photo,setPhoto] = useState('')
  const [createCategory] = useCreateCategoryMutation()
  const createCategoryHandle = (e:React.FormEvent)=>{
    e.preventDefault()
    const categoryInfo = {
      category,
      photo
    }
    createCategory(categoryInfo);
    
  }
  const imageChange = (e:any)=>{
    if(e.target.name == 'image'){
      const reader = new FileReader()
      reader.onload = ()=>{
        if(reader.readyState === 2){
          setPhoto(reader.result as string)
        }
      }
      reader.readAsDataURL(e.target.files[0])
    }
  }
  return (
    <div className="md:flex md:justify-between md:w-[80%] mx-auto mt-10">
      <form onSubmit={createCategoryHandle} className="mb-10 bg-slate-200 p-4 rounded-md">
        <div className="mb-4">
          <label htmlFor="">Category Title</label>
          <br />
          
          <input
            onChange={(e)=>setCategory(e.target.value)}
            type="text"
            required
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
          />
        </div>

        <div>
          <label>Category Image</label>
          <br />
          <input
            type="file"
            name="image"
            required
            accept="image/*"
            onChange={imageChange}
            className="file-input file-input-bordered file-input-primary w-full max-w-xs"
          />
        </div>
        <br />
        <button type="submit" className="btn btn-success">Create</button>
      </form>
      <div>
        <h1>Categories</h1>
        <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr>
        <th>1</th>
        <td>Cy Ganderton</td>
        <td>Quality Control Specialist</td>
        <td>Blue</td>
      </tr>
      {/* row 2 */}
      <tr>
        <th>2</th>
        <td>Hart Hagerty</td>
        <td>Desktop Support Technician</td>
        <td>Purple</td>
      </tr>
      {/* row 3 */}
      <tr>
        <th>3</th>
        <td>Brice Swyre</td>
        <td>Tax Accountant</td>
        <td>Red</td>
      </tr>
    </tbody>
  </table>
</div>
      </div>
    </div>
  );
};

export default CategoryPage;
