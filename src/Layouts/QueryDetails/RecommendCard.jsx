/* eslint-disable react/prop-types */


const RecommendCard = ({ recommend }) => {

    const { recommendationReason, recommenderName, recommenderEmail, recommendationTitle, recommendationImage , currentDate} = recommend;

    return (
        <div className="w-full p-3 rounded-xl bg-base-200 grid md:grid-cols-4 gap-3 items-center justify-center">

                <div className=" md:col-span-3 order-2 md:order-1">
<p className="text-blue-500 font-bold">{recommenderName} <span className="text-gray-500 font-normal">({recommenderEmail})</span></p>
{/* <p className="text-gray-500"> {recommenderEmail}</p> */}
<h4 className="font-bold text-xl">{recommendationTitle}</h4>
<p className=" font-medium">Recommendation Reason : {recommendationReason}</p>
<p className="text-gray-500">{new Date(currentDate).toString()}</p>

                </div>

                <div className="flex justify-center w-full order-1 md:order-2">
                <img
                        className="h-[150px] md:w-full mx-auto rounded-xl object-cover object-center"
                        src={recommendationImage} alt="" />
                </div>
            </div>

    );
};

export default RecommendCard;