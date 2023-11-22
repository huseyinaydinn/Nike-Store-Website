import Title from "./utils/Title"
import Item from './utils/Item'

const Sales = ({ ifExist, endpoint: { items, title } }) => {

    return (
        <>
            <div className="nike-container">
                <Title title={title} />
                <div className={`grid items-center justify-items-center  gap-7 lg:gap-5 mt-7 ${ifExist ? 'grid-cols-3 xl:grid-cols-2 md:grid-cols-1' : 'grid-cols-4 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1'}`}>
                    {items.map((item, i) => (
                        <Item {...item} key={i} />
                    ))}
                </div>
            </div>
        </>
    )
}

export default Sales