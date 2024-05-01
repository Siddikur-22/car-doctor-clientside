import person from '../../../../public/images/about_us/person.jpg'
import parts from '../../../../public/images/about_us/parts.jpg'

const About = () => {
    return (

        <div className="grid md:grid-cols-2 grid-cols-1 mb-28 mt-28 p-5 " >

            <div className="relative p-2">

                <img src={person} className="lg:w-2/3  rounded-lg shadow-2xl" />
                <img src={parts} className="lg:w-2/4 md:w-3/5 w-4/12 border-8 border-white absolute right-16 top-1/3 rounded-lg shadow-2xl" />
            </div>
            <div className="sm:p-5 space-y-7">
                <h2 className='text-3xl font-bold text-red-500'>About Us</h2>
                <h1 className="md:text-5xl text-2xl font-bold">We are qualified & of experience in this field</h1>
                <p>It sounds like you are experienced and qualified in the field of manual labor or skilled trades. Thats great! Having expertise in hands-on work is essential for many industries and can be very rewarding. Whether its construction, plumbing, electrical work, or any other field, your skills are likely in high demand. How long have you been working in this field?<br /><br />

                    It sounds like you are experienced and qualified in the field of manual labor or skilled trades. Thats great! Having expertise in hands-on work is essential for many industries and can be very rewarding. Whether its construction</p>
                <button className="btn btn-warning text-base">Get More Info</button>
            </div>
        </div>
    );
};

export default About;