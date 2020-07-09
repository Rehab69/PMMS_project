///input from ManageUsersPage --> Allusers

import React from 'react';

import Search from '../pagination-search-filter/search';
import Pagination from '../pagination-search-filter/pagination';



const UsersTable = (props) => {
    const { handleOnChange, searchValue, pageSize, activePage, changePage,Allusers } = props;

  
    const SystemUsers = Allusers.filter(user => user.inSystem === true)
    

    /////Searching///////////////
    const searchValueWithoutSpace = searchValue.trim()
    var searchedUsers = SystemUsers;

    if (searchValueWithoutSpace !== "") {
        const allSearchedUsers = [...searchedUsers]
        // const allUsersWithLowerCaseName = allSearchedUsers.map(
        //     user => {
        //         let userWithLowerCaseName = { ...user }
        //         userWithLowerCaseName.name = userWithLowerCaseName.name.toLowerCase();
        //         return userWithLowerCaseName
        //     }
        // )
        searchedUsers = allSearchedUsers.filter(user => {
            const copyUser = {...user}
            if (copyUser.name.toLowerCase().includes(searchValueWithoutSpace)) {
                return user;
            }
            return null
        })
    }
    ///////////////////////////////////

     //Pagination
     const showedUsers = searchedUsers.slice((activePage - 1) * pageSize, pageSize * activePage)
    /////////////

    return (
        <>
            <div className="container" style={{height:"100vh"}}>



                <div className="table-wrapper" style={{ fontSize: 'small',backgroundColor:"#31353d",color:'white',margin:"0px",height:"100vh" }}>
                    <div className="table-title">
                        <div className="row">
                            <div className="col-6" style={{ display: 'flex', justifyContent: 'flex-start' }}><h2>Manage Users in System</h2></div>
                            <Search handleOnChange={handleOnChange} />
                        </div>
                    </div>
                    <table className="table table-striped table-hover table-bordered">
                        <thead>
                            <tr>
                                <th className="headTable headTableUsers">#</th>
                                <th className="headTable headTableUsers">User Name <i className="fa fa-sort" /></th>
                                <th className="headTable headTableUsers">ُEmployee ID</th>
                                <th className="headTable headTableUsers">Department <i className="fa fa-sort" /></th>
                                <th className="headTable headTableUsers">Role</th>
                                <th className="headTable headTableUsers">Edit || Delete</th>
                            </tr>
                        </thead>
                        <tbody>

                            {showedUsers.map(user =>
                                <tr key={user.no}>
                                    <td>{user.no}</td>
                                    <td>{user.name}</td>
                                    <td>{user.Emp_ID}</td>
                                    <td>{user.Department}</td>
                                    <td>
                                       {user.role}
                                    </td>
                                    
                                    <td>
                                    <button className="edit" style={{ borderRadius: '10px',marginRight:"0.25rem" }} title="Edit" data-toggle="tooltip"><i className="fas fa-edit"></i></button>
                                      |||  <button className="delete" style={{ borderRadius: '10px',marginLeft:"0.25rem" }} title="Delete" data-toggle="tooltip"><i className="material-icons"></i></button>
                                    </td>
                                </tr>)
                            }

                        </tbody>
                    </table>
                    <div className="clearfix">
                        <div className="hint-text">Showing <b>{searchedUsers.length<5?searchedUsers.length:5}</b> out of <b>{searchedUsers.length}</b> entries</div>
                        <Pagination pageSize={pageSize}
                            countOfElements={searchedUsers.length}
                            activePage={activePage}
                            changePage={changePage} />
                        {/* <ul className="pagination">
                            <li className="page-item disabled"><Link to="#"><i className="fa fa-angle-double-left" /></Link></li>
                            <li className="page-item active"><Link to="#" className="page-link">1</Link></li>
                            <li className="page-item"><Link to="#" className="page-link">2</Link></li>
                            <li className="page-item "><Link to="#" className="page-link">3</Link></li>
                            <li className="page-item"><Link to="#" className="page-link">4</Link></li>
                            <li className="page-item"><Link to="#" className="page-link">5</Link></li>
                            <li className="page-item"><Link to="#" className="page-link"><i className="fa fa-angle-double-right" /></Link></li>
                        </ul> */}
                    </div>
                </div>






            </div>
        </>
    );
}

export default UsersTable;














