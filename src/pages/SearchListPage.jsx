import React, { useContext } from 'react'
import SearchForm from '../components/SearchForm'

export default function SearchListPage() {

    return (
     <div>
            <img className="firstImg" src="https://images.squarespace-cdn.com/content/v1/554b5e7ce4b0149371f10a93/1571745487059-YDQI3HZHQAAWO5U2F3Y4/ke17ZwdGBToddI8pDm48kF9aEDQaTpZHfWEO2zppK7Z7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UX7HUUwySjcPdRBGehEKrDf5zebfiuf9u6oCHzr2lsfYZD7bBzAwq_2wCJyqgJebgg/Office-Escape.jpg?format=1000w" />
     
     <div className="wrapper">
        <h2> Escape from old habits and obligations to take a step out into the unknown</h2>
     <SearchForm />  
     </div>
     
    
    </div>
    )
}
