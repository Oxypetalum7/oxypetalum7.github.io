import makeStyles from '@mui/styles/makeStyles';

export const useStyle = makeStyles (
        {
            Grid_container: {
                paddingTop: "2rem"
            },
            Title: {
                paddingTop: "1rem",
                textAlign: "center", 
                justifyContent: "center"
            },
            Paper_body: {
                paddingTop: "2rem",
                width: "60vw",
                justifyContent: "center",
            },
            paper_body_section: {
                display: "flex",
            },
            Profile_content: {
                padding: "3rem 0",
                paddingLeft: "5vw",
                width: "30vw",
                verticalAlign: "middle"
            },
            Profile_Media: {
                textAlign: "center",
                margin: "auto auto",
                width: "25vw",
            },
            Icon: {
                width: "50%",
                height: "50%",
                borderRadius: "50%",
                boxShadow: "1px 4px 4px 0 rgba(0, 0, 0, .2)"
            }
        }
    )