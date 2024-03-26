import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root';
import Home from './components/Home/Home';
import ListedBooks from './components/ListedBooks/ListedBooks';
import ErrorPage from './components/ErrorPage/ErrorPage';
import BookDetails from './components/BookDetails/BookDetails';
import {ToastContainer} from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import ShapeChart from './components/ShapChart/ShapeChart';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/listed',
        element: <ListedBooks></ListedBooks>
      },
      {
        path: '/read',
        element: <ShapeChart></ShapeChart>,
      },
      {
        path: '/book/:bookId',
        element: <BookDetails></BookDetails> ,
        loader: () => fetch('/booksData.json')
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <ToastContainer />
  </React.StrictMode>,
)
