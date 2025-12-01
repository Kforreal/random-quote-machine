import React from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons';


const QuoteMachine = ({assignNewQuoteIndex, selectedQuote}) => (
    <>
        <CardContent sx={{ minHeight: '60px', textAlign: 'center', padding: '16px 24px', }}>  
            <Typography sx={{ width: '90%', margin: '0 auto' }} id = "text">
                        {`"${selectedQuote.quote}" - ${selectedQuote.author}`}
            </Typography>
        </CardContent>
        <CardActions sx={{ justifyContent: 'center' }}>
            <Button id = "new-quote" size = "small"onClick = {assignNewQuoteIndex}> Next Quote </Button>
            <IconButton
                id = "tweet-quote"
                target="_blank"
                href={encodeURI(`https://x.com/intent/tweet?text=${selectedQuote.quote}&hashtags=QuoteOfTheDay`)}
            >
                <FontAwesomeIcon icon={faXTwitter} size="md"> </FontAwesomeIcon>  
            </IconButton>
        </CardActions>
        
    </>
);  

export default QuoteMachine;