import { styled } from "@mui/material"
import { ReactNode } from "react"

interface StyledButtonPage{
    children: ReactNode
}

const StyledButton: React.FC <StyledButtonPage> = ({ children }) => {

  
    const StyledButton = styled("button") (({theme}) => ({
            background:"transparent",
            border:`1px solid ${theme.palette.primary.contrastText}`,
            borderRadius:"3px",
            padding:"5px 15px",
            width:"100%",
            color:theme.palette.primary.contrastText,
            cursor: "pointer",
            display:"inline-flex",
            justifyContent:"center",
            alignItems:"center",
            gap:"10px",
                '&:hover': {
                    backgroundColor: theme.palette.secondary.main
                }
    }))

    return (
      <>
        <StyledButton>
            {children}
        </StyledButton>
      </>
    )
  }
  
  export default StyledButton