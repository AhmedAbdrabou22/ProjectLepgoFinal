import React from 'react'

const FavouriteCard = ({img}) => {
    return (
        <div>
            <div  className='w-75 mx-auto favItem mt-4'>
                <img src={img} style={{ width: "300px", height: "200px" }}  alt='img' />
                <div className='mx-3'>
                    <h2 className='infos'>إم دبليو</h2>
                    <p className='infos infoDetails w-75'>أكثر السيارات رفاهية وفخامةوجودة ...حيث أنها تمتلك وجه أماميه</p>
                    <p className='infos'>الدقهلية/المنصورة اجا</p>
                    <p style={{ color: "#08324B", fontSize: "18px", cursor: "pointer" }} className='infos'>إزالة من المفضلة</p>
                </div>
                <div className='priceDetails'>
                    <div className='detailsFavItemduration'>
                        <p style={{color:"#9399A3"}}><span style={{fontSize: "18px" , color:"#08324B"}}>500</span> جنيه</p>
                        <span style={{marginTop:"-15px" , display:"block" ,color:"#CB955B"}}>لمدة 1 يوم</span>
                    </div>
                    <div className='detailFavItem'>
                        <div style={{ background: "#CB955B", color: "#08324B", padding: "0 15px", borderRadius: "10px" }} className='d-inline'>
                            <span>غير قابل للشحن</span>
                        </div>
                        <div className='d-inline'>
                            <span style={{ color: "#FFA841" }} className='mx-4'>4.5</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FavouriteCard
