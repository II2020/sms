import React, { useState } from 'react';
import { Table } from 'antd';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const propTypes = {
    pagination: PropTypes.bool,
};
const defaultProps = {
    pagination: false,
};
const CustomTable = (props) => {
    const [buttonStyle] = useState(props.theme);

    return (
        <Table
            tableLayout={props.tableLayout}
            bordered={props.bordered}
            columns={props.columns}
            components={props.components}
            dataSource={props.dataSource}
            expandable={props.expandable}
            footer={props.footer}
            loading={props.loading}
            locale={props.locale}
            pagination={props.pagination}
            rowClassName={props.rowClassName}
            rowKey={props.rowKey}
            rowSelection={props.rowSelection}
            scroll={props.scroll}
            showHeader={props.showHeader}
            size={props.size}
            summary={props.summary}
            title={() => props.title}
            onChange={props.onChange}
            onHeaderRow={props.onHeaderRow}
            onRow={props.onRow}
            getPopupContainer={props.getPopupContainer}
            sortDirections={props.sortDirections}
            showSorterTooltip={props.showSorterTooltip}
            sticky={props.sticky}
            style={{ ...buttonStyle, ...props.style }}
        />
    );
};
CustomTable.propTypes = propTypes;
CustomTable.defaultProps = defaultProps;
const mapStateToProps = (state) => {
    return {
        theme: state.ThemeReducer.defaultTheme,
    };
};

export default connect(mapStateToProps, null)(CustomTable);
