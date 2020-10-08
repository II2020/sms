import React, { useEffect } from 'react';
import GradeWiseFillter from '../../components/templates/fillter/GradeWiseFillter';
import { grade } from '../../constants/MockData';
import { connect } from 'react-redux';
import { SAVE_CURRENT_PATH } from '../../redux/action/CurrentPath';
import './Style.StudentAdmissions.scss';

const StudentAdmission = (props) => {
    useEffect(() => {
        props.saveCurrentPath('studentAdmission');
    });
    const onClickGrade = (gradeId, division) => {
        console.log(gradeId, division);
    };

    const onClickDivision = (divisionId, division) => {
        console.log(divisionId, division);
    };
    return (
        <div>
            <br />
            <GradeWiseFillter grade={grade} onClickGrade={onClickGrade} onClickDivision={onClickDivision} />
        </div>
    );
};

const mapDispatchToProps = (dispatch) => {
    return {
        saveCurrentPath: (path) => {
            dispatch({ type: SAVE_CURRENT_PATH, payload: path });
        },
    };
};
export default connect(null, mapDispatchToProps)(StudentAdmission);
