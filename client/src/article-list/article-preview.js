// REACT
import React from 'react';

// MATERIAL-UI
import { withStyles } from 'material-ui/styles';
import Card, { CardHeader, CardMedia, CardContent, CardActions} from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import Avatar from 'material-ui/Avatar';
import red from 'material-ui/colors/red';
import Grid from 'material-ui/Grid';



const styles = theme => ( {
    media: {
        height: '100%',
    },
    avatar: {
        backgroundColor: red[500],
    },
} );

const capitals = word => {
    return word.split('')
        .filter(( letter, index ) => ( letter === letter.toUpperCase() || index === 0 ) ? true : false )
        .join('');

};




const ArticlePreview = ( {
    artId,
    title,
    author,
    description,
    source,
    urlToImage,
    classes,
    theme,
    history
} ) => {
    const trimStr = (string, length) => {
        if (!string) {
            return null;
        } else {
            return (string.length > length)
                ? string.substring( 0, length - 3 ) + '...'
                : string;
        }
    };

    return (
        <div>
            <Card>
                <Grid container direction='row' justify='flex-start' alignItems='stretch' spacing={0}>

                    <Grid item sm={3}>
                        <CardMedia
                            className={classes.media}
                            image={urlToImage}
                            src='img'
                        />
                    </Grid>
                    <Grid item xs={12} sm={9}>

                        <CardHeader
                            title={trimStr(title, 50)}
                            subheader={`by ${author}`}
                            avatar={
                                <Avatar aria-label='Recipe' className={classes.avatar}>
                                    {capitals(source)}
                                </Avatar>
                            }
                        />



                        <CardContent>
                            <Typography component='p'>
                                {trimStr(description, 70)}
                            </Typography>
                        </CardContent>


                        <CardActions>
                            <Button
                                dense
                                color='primary'
                                onClick={()=>history.push(`/details/${artId}`)}>
                                Read More
                            </Button>
                        </CardActions>

                    </Grid>
                </Grid>
            </Card>
        </div>
    );
};

export default withStyles(styles, { withTheme: true })(ArticlePreview);
