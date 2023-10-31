import React from 'react';

const SearchInput = (props: any) => {
  return (
    <form className="w-[100%]">
      <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only">Search</label>
      <div className="relative w-[100%] flex items-center">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" width="14" height="14"
               viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M9.625 8.5H9.0325L8.8225 8.2975C9.5575 7.4425 10 6.3325 10 5.125C10 2.4325 7.8175 0.25 5.125 0.25C2.4325 0.25 0.25 2.4325 0.25 5.125C0.25 7.8175 2.4325 10 5.125 10C6.3325 10 7.4425 9.5575 8.2975 8.8225L8.5 9.0325V9.625L12.25 13.3675L13.3675 12.25L9.625 8.5ZM5.125 8.5C3.2575 8.5 1.75 6.9925 1.75 5.125C1.75 3.2575 3.2575 1.75 5.125 1.75C6.9925 1.75 8.5 3.2575 8.5 5.125C8.5 6.9925 6.9925 8.5 5.125 8.5Z"
              fill="#888888"/>
          </svg>
        </div>
        <input
          type="search"
          id="default-search"
          className="bg-white w-full p-4 pr-7 pl-10 text-sm text-gray-900 border border-gray-300 rounded-[10px] outline-none"
          placeholder="Search Cars e.g. Skoda Slavia"
        />
        <svg
          className=" absolute right-2.5 bottom-4.5 hover:bg-blue-800"

          width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0.25 10.75V12.25H4.75V10.75H0.25ZM0.25 1.75V3.25H7.75V1.75H0.25ZM7.75 13.75V12.25H13.75V10.75H7.75V9.25H6.25V13.75H7.75ZM3.25 4.75V6.25H0.25V7.75H3.25V9.25H4.75V4.75H3.25ZM13.75 7.75V6.25H6.25V7.75H13.75ZM9.25 4.75H10.75V3.25H13.75V1.75H10.75V0.25H9.25V4.75Z"
            fill="#888888"/>
        </svg>
      </div>
    </form>
  );
}

export default SearchInput;