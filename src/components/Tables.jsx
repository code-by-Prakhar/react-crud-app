import React from 'react'
import { Link } from 'react-router-dom'

const Tables = ({ user }) => {
    return (
        <>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="p-4">

                            </th>
                            <th scope="col" className="px-6 py-3">
                                Name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Position
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Number
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            user.map((value) => (
                                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                    <td className="w-4 p-4">
                                        <div className="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                                            <span className="font-medium text-gray-600 dark:text-gray-300">{value.floating_first_name.toUpperCase().charAt(0) + value.floating_last_name.toUpperCase().charAt(0)}</span>
                                        </div>
                                    </td>
                                    <th scope="row" className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                                        <div className="ps-3">
                                            <div className="text-base font-semibold">{value.floating_first_name}</div>
                                            <div className="font-normal text-gray-500">{value.floating_email}</div>
                                        </div>
                                    </th>
                                    <td className="px-6 py-4">
                                       {value.repeat_password}
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center">
                                           {value.floating_password}
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">

                                        <Link to={`/update/${value.id}`} type="button" data-modal-target="editUserModal" data-modal-show="editUserModal" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit user</Link>
                                    </td>
                                </tr>
                            ))
                        }

                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <td className="w-4 p-4">

                                <div className="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                                    <span className="font-medium text-gray-600 dark:text-gray-300">JL</span>
                                </div>

                            </td>
                            <th scope="row" className="flex items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                <div className="ps-3">
                                    <div className="text-base font-semibold">Bonnie Green</div>
                                    <div className="font-normal text-gray-500">bonnie@flowbite.com</div>
                                </div>
                            </th>
                            <td className="px-6 py-4">
                                Designer
                            </td>
                            <td className="px-6 py-4">
                                <div className="flex items-center">
                                    1234567890
                                </div>
                            </td>
                            <td className="px-6 py-4">

                                <a href="#" type="button" data-modal-show="editUserModal" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit user</a>
                            </td>
                        </tr>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <td className="w-4 p-4">

                                <div className="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                                    <span className="font-medium text-gray-600 dark:text-gray-300">JL</span>
                                </div>

                            </td>
                            <th scope="row" className="flex items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                <div className="ps-3">
                                    <div className="text-base font-semibold">Jese Leos</div>
                                    <div className="font-normal text-gray-500">jese@flowbite.com</div>
                                </div>
                            </th>
                            <td className="px-6 py-4">
                                Vue JS Developer
                            </td>
                            <td className="px-6 py-4">
                                <div className="flex items-center">
                                    1234567890
                                </div>
                            </td>
                            <td className="px-6 py-4">

                                <a href="#" type="button" data-modal-show="editUserModal" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit user</a>
                            </td>
                        </tr>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <td className="w-4 p-4">

                                <div className="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                                    <span className="font-medium text-gray-600 dark:text-gray-300">JL</span>
                                </div>

                            </td>
                            <th scope="row" className="flex items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                <div className="ps-3">
                                    <div className="text-base font-semibold">Thomas Lean</div>
                                    <div className="font-normal text-gray-500">thomes@flowbite.com</div>
                                </div>
                            </th>
                            <td className="px-6 py-4">
                                UI/UX Engineer
                            </td>
                            <td className="px-6 py-4">
                                <div className="flex items-center">
                                    1234567890
                                </div>
                            </td>
                            <td className="px-6 py-4">

                                <a href="#" type="button" data-modal-show="editUserModal" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit user</a>
                            </td>
                        </tr>
                        <tr className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <td className="w-4 p-4">

                                <div className="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                                    <span className="font-medium text-gray-600 dark:text-gray-300">JL</span>
                                </div>

                            </td>
                            <th scope="row" className="flex items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                <div className="ps-3">
                                    <div className="text-base font-semibold">Leslie Livingston</div>
                                    <div className="font-normal text-gray-500">leslie@flowbite.com</div>
                                </div>
                            </th>
                            <td className="px-6 py-4">
                                Node js
                            </td>
                            <td className="px-6 py-4">
                                <div className="flex items-center">
                                    1234567890
                                </div>
                            </td>
                            <td className="px-6 py-4">

                                <a href="#" type="button" data-modal-show="editUserModal" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit user</a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </>
    )
}

export default Tables
