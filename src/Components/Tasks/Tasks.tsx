
interface TaskProps{
    task:{
    name: string,
    img: string,
    id: number,
    }
    }

const Tasks = ({task:{name, img, id}}:TaskProps) => {

    return (
        <div className="hover:scale-90 lg:w-64 lg:ml-28 md:w-40 md:ml-4 bg-base-100 shadow-2xl mt-10 p-2 hover:bg-blue-200 hover:cursor-pointer rounded-ss-xl">
            <h2 className="card-title">{name}</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <img style={{height:'300px'}} src={img} alt="Shoes" />
        </div>
      
    );
};

export default Tasks;