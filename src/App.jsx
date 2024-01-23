import './App.css'
import { fakeUserData } from './Api/api'
import { useDispatch, useSelector } from 'react-redux';
import { addUser } from './Store/Slices/UserSlice';

function App() {
  const dispatch = useDispatch();
  const data = useSelector((state) => {
    return state.users;
  })

  console.log(data);

  const addNewUser = (name) => {
    dispatch(addUser(name));
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
              data.map((user, id) => <li key={id}> {user} <hr /> </li>)
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
