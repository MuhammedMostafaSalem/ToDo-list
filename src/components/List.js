import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons'
import { Row } from 'react-bootstrap'

const List = ({data}) => {
    return (
        <Row>
            <div>
                {
                    data.length >=1 ? (data.map((item , index)=> {
                        return(
                            <div className='d-flex justify-content-between bg-list py-2 px-5' key={item.id} >
                                <div className='text-capitalize'>
                                    {item.list}
                                </div>
                                <div type="submit" className='btn submitList'>
                                    <FontAwesomeIcon icon={faCircleXmark} className='fs-3 text-primary' />
                                </div>
                            </div>
                        )
                    })) : <h2 className='text-center text-capitalize'>No plans today</h2>
                }
            </div>
        </Row>
    )
}

export default List