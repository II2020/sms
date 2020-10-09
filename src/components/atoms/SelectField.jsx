import React from 'react';
import { FormGroup, ControlLabel, SelectPicker, Row, Col } from 'rsuite';
const SelectField = ({
    name,
    label,
    accepter,
    data,
    appearance,
    block,
    classPrefix,
    cleanable,
    container,
    defaultValue,
    disabled,
    disabledItemValues,
    groupBy,
    labelKey,
    listProps,
    maxHeight,
    menuClassName,
    menuStyle,
    onChange,
    onClean,
    onClose,
    onEnter,
    onEntered,
    onEntering,
    onExit,
    onExited,
    onExiting,
    onGroupTitleClick,
    onOpen,
    onSearch,
    onSelect,
    placeholder,
    placement,
    preventOverflow,
    renderExtraFooter,
    renderMenu,
    renderMenuGroup,
    renderMenuItem,
    renderValue,
    searchBy,
    searchable,
    size,
    sort,
    toggleComponentClass,
    value,
    valueKey,
    style,
    className,
    ...props
}) => {
    return (
        <FormGroup style={{ width: '100%' }}>
            <Row>
                <Col md={12}>
                    <ControlLabel
                        style={{ color: 'black', display: 'flex', flexDirection: 'row', justifyContent: 'flex-start' }}
                    >
                        {label}{' '}
                    </ControlLabel>
                </Col>
                <Col md={12}>
                    <SelectPicker
                        className={className}
                        name={name}
                        style={style}
                        data={data}
                        appearance={appearance}
                        block={block}
                        classPrefix={classPrefix}
                        cleanable={cleanable}
                        container={container}
                        defaultValue={defaultValue}
                        disabled={disabled}
                        disabledItemValues={disabledItemValues}
                        groupBy={groupBy}
                        labelKey={labelKey}
                        listProps={listProps}
                        maxHeight={maxHeight}
                        menuClassName={menuClassName}
                        menuStyle={menuStyle}
                        onChange={onChange}
                        onClean={onClean}
                        onClose={onClose}
                        onEnter={onEnter}
                        onEntered={onEntered}
                        onEntering={onEntering}
                        onExit={onExit}
                        onExited={onExited}
                        onExiting={onExiting}
                        onGroupTitleClick={onGroupTitleClick}
                        onOpen={onOpen}
                        onSearch={onSearch}
                        onSelect={onSelect}
                        placeholder={placeholder}
                        placement={placement}
                        preventOverflow={preventOverflow}
                        renderExtraFooter={renderExtraFooter}
                        renderMenu={renderMenu}
                        renderMenuGroup={renderMenuGroup}
                        renderMenuItem={renderMenuItem}
                        renderValue={renderValue}
                        searchBy={searchBy}
                        searchable={searchable}
                        size={size}
                        sort={sort}
                        toggleComponentClass={toggleComponentClass}
                        value={value}
                        valueKey={valueKey}
                    />
                </Col>
            </Row>
        </FormGroup>
    );
};
export default SelectField;
