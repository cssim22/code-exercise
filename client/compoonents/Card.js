import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import LabelComponent from './LabelComponent';

const InfoCard = (props) => {

  // passed down props from the main container
  const { businessRecipient, from, imageUrl, individualRecipient, timestamp, forward, scan, shred } = props;

  return (
    <Card 
      className="cardclass">
      <CardMedia
        component="img"
        alt="Physical Mail Image"
        height="140"
        image={imageUrl}
        title="Physical Mail"
      />

      <CardContent 
        className="cardcontent">
        <Typography 
          variant="h6" 
          component="h2">
          <b>{from}</b>
        </Typography>
        <LabelComponent
          businessRecipient={businessRecipient}
          individualRecipient={individualRecipient}
          forward={forward}
          scan={scan}
          shred={shred}
        />
      </CardContent>

      <div className="timestamp">
      {timestamp}
      </div>
  </Card>
  );
}

export default InfoCard;