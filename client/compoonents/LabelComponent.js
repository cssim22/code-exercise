import React from 'react';
import CardContent from '@material-ui/core/CardContent';

const BusinessRecipient = (props) => {

  const { businessRecipient, individualRecipient, forward, scan, shred } = props;

  const imageAssets = {
    businessIcon: "https://s3-us-west-2.amazonaws.com/usestable.com-assets/icons/company.svg",
    individualIcon: "https://s3-us-west-2.amazonaws.com/usestable.com-assets/icons/recipient.svg",
    scanIcon: "https://s3-us-west-2.amazonaws.com/usestable.com-assets/icons/scan.svg",
    shredIcon: "https://s3-us-west-2.amazonaws.com/usestable.com-assets/icons/shred.svg",
    forwardIcon: "https://s3-us-west-2.amazonaws.com/usestable.com-assets/icons/forward.svg",
    processingIcon: "https://s3-us-west-2.amazonaws.com/usestable.com-assets/icons/processing.svg",
  }

  const cardContentArray = []

  if (businessRecipient) {
    cardContentArray.push(<React.Fragment><img className="assetImg" src={imageAssets.businessIcon}></img> {businessRecipient}<br></br></React.Fragment>)
  }

  if (individualRecipient) {
    cardContentArray.push(<React.Fragment><img className="assetImg" src={imageAssets.individualIcon}></img> {individualRecipient}<br></br></React.Fragment>)
  }

  if (forward) {
    if (forward === "completed") {
      cardContentArray.push(<React.Fragment><img className="assetImg" src={imageAssets.forwardIcon}></img> Forward {forward}<br></br></React.Fragment>)
    } else cardContentArray.push(<React.Fragment><img className="assetImg" src={imageAssets.processingIcon}></img> Forward {forward}<br></br></React.Fragment>)
  }

  if (scan) {
    if (scan === "completed") {
    cardContentArray.push(<React.Fragment><img className="assetImg" src={imageAssets.scanIcon}></img> Scan {scan}<br></br></React.Fragment>)
    } else cardContentArray.push(<React.Fragment><img className="assetImg" src={imageAssets.processingIcon}></img> Scan {scan}<br></br></React.Fragment>)
  }

  if (shred) {
    if (shred === "completed") {
    cardContentArray.push(<React.Fragment><img className="assetImg" src={imageAssets.shredIcon}></img> Shred {shred}<br></br></React.Fragment>)
    } else cardContentArray.push(<React.Fragment><img className="assetImg" src={imageAssets.processingIcon}></img> Shred {shred}<br></br></React.Fragment>)
  }

  return (
    <CardContent>
      <span>
      {cardContentArray}
      </span>
    </CardContent>
  );
}

export default BusinessRecipient;