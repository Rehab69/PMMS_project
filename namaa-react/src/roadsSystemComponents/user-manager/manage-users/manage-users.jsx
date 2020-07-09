//input from UsersPage ---> Allusers , onChange for search, searchValue for Search

import React from 'react';

import Search from '../pagination-search-filter/search';
import Pagination from '../pagination-search-filter/pagination';

 import '../reports-style.css'
 import '../users.css'


const ManageUser = (props) => {

    const { Allusers, handleOnChange, searchValue,
        pageSize, activePage, changePage
    } = props;
    const no_pages = 5;

    const userNotInSystem = Allusers.filter(user=>user.inSystem!==true)
    /////Searching///////////////
    const searchValueWithoutSpace = searchValue.trim()
    var searchedUsers = userNotInSystem;

    if (searchValueWithoutSpace !== "") {
        const allSearchedUsers = [...searchedUsers]
       
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
    //////////////


    return (
        <>
            <div className="container">



                <div className="table-wrapper" style={{ fontSize: 'small',margin:"0px",height:"100vh"  }}>
                    <div className="table-title">
                        <button className="btn btn-info" style={{ fontSize: '1.6rem' }}>+ Create New User</button>

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
                                <th className="headTable headTableUsers">Confirm to add user to System</th>
                                <th className="headTable headTableUsers">Delete</th>
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
                                        
                                        <select name="role" id="role" defaultValue="" style={{color:'black'}}>
                            {user.role?<option>{user.role}</option>:<>

                                            <option disabled="disabled"  value="" >Choose Role</option>
                                            <option value="2">Data Entry</option>
                                            <option value="3">Reviewer</option>
                                            <option value="4">Analyst</option>
                                            <option value="5">Manager</option>
                                            <option value="6">Decision Maker</option>
                                            </>
                                            }
                                        </select>
                                    </td>
                                    <td>
                                        <span style={{ fontSize: '10px', paddingRight: '1vw', marginBottom: '0.5vw !important' }}></span>
                                        <input style={{ margin: '0 !important', width: '2vw', height: '2vw' }} type='checkbox'              ></input>
                                    </td>
                                    <td>
                                        <button className="delete" style={{ borderRadius: '10px' }} title="Delete" data-toggle="tooltip"><i className="material-icons"></i></button>
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

export default ManageUser;














