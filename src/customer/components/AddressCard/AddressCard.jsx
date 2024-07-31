import React, { useEffect } from "react";

const AddressCard = ({ address }) => {
  // useEffect(() => {
  //   console.log("address:", address);
  // }, []);

  return (
    <div>
      <div className="space-y-3">
        <p className="font-semibold">
          {address?.firstName} {address?.lastName}
        </p>
        <p>
          {address?.state}, {address?.city}, {address?.zipCode}
        </p>
        <div>
          <p className="font-semibold">Phone Number</p>
          <p>{address?.mobile}</p>
        </div>
      </div>
    </div>
  );
};

export default AddressCard;
