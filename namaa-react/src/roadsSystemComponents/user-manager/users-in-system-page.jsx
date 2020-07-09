//input from app ---> Allusers

import React from 'react';



import UsersTable from './manage-users/users-table';

const UsersPage = (props) => {
    const {searchValue,handleOnChange, pageSize, activePage, changePage,Allusers } =props;
    return (
        <>

        
                <main className="page-content" id="page-content">
                    <div className="container-fluid">
                        <UsersTable
                        searchValue={searchValue} 
                        handleOnChange={handleOnChange}
                        pageSize={pageSize}
                        activePage={activePage}
                        changePage={changePage}
                        Allusers={Allusers}
                        />

                    </div>

                </main>
     
        </>
    );
}

export default UsersPage;