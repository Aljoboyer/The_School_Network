import React, { useEffect,useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {GetAllBooks} from '../../../SchoolRedux/TeacherSlice';
import Book from '../../Shared/LibraryPages/BooksManage/Book';

const BookView = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(GetAllBooks())
    },[])
    const Books = useSelector((state) => state.teacherStore.Books)
    
  return (
    <div className='pl-8 pr-8'>
        <h1 className="text-3xl text-blue-900 text-center my-8 font-bold">The School Network Library</h1>
        <div className='book_container'>
          {
            Books?.map(book => <Book key={book._id} book={book} />)
          }
        </div>
    </div>
  );
}

export default BookView;