/* eslint-disable react/prop-types */


const RecommendsForMeCard = ({myRecommend, idx}) => {

const { recommendationReason, recommendationTitle, recommendationImage , productName, userName, userEmail, queryTitle, recommenderName, recommenderEmail} = myRecommend ;

    return (
        <tr className="hover duration-300">
               <th>
                {idx+1}
               </th>
               <td>
                 <div className="flex items-center gap-3 lg:gap-5">
                   <div className="avatar">
                     <div className="mask mask-squircle h-16 w-16">
                       <img
                         src={recommendationImage}
                         alt="Avatar Tailwind CSS Component" />
                     </div>
                   </div>
                   <div>
                     <div className="font-bold">{productName}</div>
                     <div className="text-sm opacity-70">{queryTitle}</div>
                   </div>
                 </div>
               </td>
               <td>
               <div className="font-bold">{recommendationTitle}</div>
               <div className="text-sm opacity-70">{recommendationReason}</div>
               </td>
               <td>
               <div className="font-bold">{recommenderName}</div>
               <div className="text-sm opacity-70">{recommenderEmail}</div>
               </td>
               <td>
               <div className="font-bold">{userName}</div>
               <div className="text-sm opacity-70">{userEmail}</div>
               </td>
             </tr>
    );
};

export default RecommendsForMeCard;