import './App.css'
import { MdDelete } from "react-icons/md";
import { fakeUserData } from './Api/api'
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from './Store/Slices/UserSlice';

function App() {
  const dispatch = useDispatch();
  const data = useSelector((state) => {
    return state.users;
  })

  console.log(data);

  const addNewUser = (name) => {
    dispatch(addUser(name));
  }

  const deleteUser = (id) => {
    dispatch(removeUser(id))
  }
  return (
    <>
      <div>
        <h1 className='font-bold'>Redux Tolkit App</h1>
        <div className="my-10 max-w-7xl px-12">
          <div className="flex justify-between py-2">
            <div className="text-3xl font-bold text-slate-500">List of User Details</div>
            <button className="bg-blue-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" onClick={() => addNewUser(fakeUserData())}>
              Add New Users
            </button>
          </div>
          <hr />
          <ul className='m-2 p-2 space-y-4 text-left'>
            {
              data.map((user, id) => <li key={id} className='flex justify-end'> {id+1}. {user} <button className='p-2 ml-96 bg-red-500 hover:bg-rose-700 hover:rounded rounded-xl' onClick={() => deleteUser(id)}><MdDelete /></button> <hr /></li>)
            }
          </ul>
          <div className='my-2 flex justify-end'>
            <button className="bg-orange-400 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ">
              Clear All Users
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
