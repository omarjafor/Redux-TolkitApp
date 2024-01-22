import './App.css'

function App() {

  return (
    <>
      <div>
        <h1 className='font-bold'>Redux Tolkit App</h1>
        <div className="my-10 max-w-7xl px-12">
          <div className="flex justify-between py-2">
            <div className="text-3xl font-bold text-slate-500">List of User Details</div>
            <button className="bg-blue-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
              Add New Users
            </button>
          </div>
          <hr />
          <ul className='m-2 p-2 space-y-4'>
            <li>Hi 1</li>
            <hr />
            <li>Hi 2</li>
          </ul>
          <hr />
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
