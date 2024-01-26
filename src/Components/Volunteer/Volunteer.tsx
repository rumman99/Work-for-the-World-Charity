import { useForm } from 'react-hook-form';


const Volunteer = () => {
    const errorText= {
        color: 'red'
    }
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm()
    console.log(watch("example"))

    return (
        <>
        <div style={{display:'flex', justifyContent:'center', marginTop:'20px'}}>
            <form>
            <input defaultValue='' {...register("name", { required: true })} placeholder='Name' />
            <br/>
            <input defaultValue='' {...register("email", { required: true })} placeholder='Email' />
            <br/>
            <input defaultValue='' {...register("phone", { required: true })} placeholder='Phone' />
            <br/>
            <input {...register("address", { required: true })} placeholder='Address' />
            <br/>
            {/* errors will return when field validation fails  */}
            {errors.address && <span style={errorText}>Address field is required</span>}
            <br/>
            {errors.name && <span style={errorText}>Name field is required</span>}
            <br/>
            {errors.email && <span style={errorText}>Email field is required</span>}
            <br/>
            {errors.phone && <span style={errorText}>Phone field is required</span>}
            <br/>
            <input type="submit" value='Confirm Your Order' />
            </form>
        </div>
        </>  
    );
};

export default Volunteer;