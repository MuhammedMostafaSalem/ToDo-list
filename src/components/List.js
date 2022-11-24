import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons'
import { Row } from 'react-bootstrap'

const List = ({ data , deleteItem }) => {
    // to delet one item from arr from id
    const onDeleteItem=(ID)=> {
        if(data.length >=1){
            const index = data.findIndex((i)=> i.id === ID)
            data.splice(index , 1)
            deleteItem(data)
        }
    }


    return (
        <Row>
            <div>
                {
                    data.length >=1 ? (data.map((item)=> {
                        return(
                            <div className='d-flex justify-content-between bg-list py-2 px-5 mb-2' key={item.id} >
                                <div className='text-capitalize'>
                                    {item.list}
                                </div>
                                <div type="submit" className='btn submitList'>
                                    <FontAwesomeIcon onClick={()=> onDeleteItem(item.id)} icon={faCircleXmark} className='fs-3 text-primary' />
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