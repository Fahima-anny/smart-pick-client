/* eslint-disable react/prop-types */


const RecommendCard = ({ recommend }) => {

    const { recommendationReason, recommenderName, recommenderEmail, currentDate, recommendationTitle, recommendationImage } = recommend;

    return (
        <div className="w-full p-3 rounded-xl bg-base-200 flex">

                <div className=" flex-grow">

                </div>
                <div className="">
                    <img
                        className="h-[100px] w-[100px] rounded-xl object-cover object-center"
                        src={recommendationImage} alt="" />
                </div>

            </div>

    );
};

export default RecommendCard;