//input from app ---> Allusers , onChange for search

import React from 'react';



import ManageUser from './manage-users/manage-users';

const ManageUsersPage = (props) => {

    const { Allusers, handleOnChange, searchValue
        , pageSize, activePage, changePage } = props;
        


    return (
        <>

            <main className="page-content" id="page-content">
                <div className="container-fluid">
                    <ManageUser Allusers={Allusers}
                        handleOnChange={handleOnChange}
                        searchValue={searchValue}
                        pageSize={pageSize}
                        activePage={activePage}
                        changePage={changePage}
                    />

                </div>

            </main>
        </>
    );
}

export default ManageUsersPage;