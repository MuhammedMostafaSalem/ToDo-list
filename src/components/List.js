import React from 'react'
// import { Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons'

const List = () => {
    return (
        <div className='d-flex justify-content-between bg-list py-2 px-5'>
            <div className='text-capitalize'>
                my plan today
            </div>
            <div type="submit" className='btn submitList'>
                <FontAwesomeIcon icon={faCircleXmark} className='fs-3 text-primary' />
            </div>
        </div>
    )
}

export default List