import styled from "styled-components"
import './css/ProgressBar.css';
export default ({ stats }) => {

    const Container = styled.div`
      width:200px;
      height:60px;
    `;
    const ProgressBar = styled.div`
        width:100%;
        height:20px;
        border-radius:10px;
        background-color:#e6e6e6;
        margin-bottom:10px;
        font-weight:bold;
    `;
    const ProgressBarFill = styled.div`
        background-color:${props => props.progress < 50 ? "#ff0000" : "#2ecc71"};
        height:100%;
        border-radius:10px;
        transition:width 0.5s ease-out;
    `;

    const ProgressBarFillText = styled.p`
       margin-left:10px;
    `;
    const ProgressLabel = styled.div`
        font-size:14px;
        font-weight:bold;
        color:#ffffff;
    `;


    return (
        <Container>
            <ProgressLabel>{stats.stat.name}</ProgressLabel>
            <ProgressBar>
                <ProgressBarFill style={{ width: `${stats.base_stat}%` }} progress={stats.base_stat}>
                    <ProgressBarFillText>{stats.base_stat}</ProgressBarFillText>
                </ProgressBarFill>
            </ProgressBar>

        </Container>
    )
}