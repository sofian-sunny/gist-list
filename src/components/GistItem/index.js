import React from "react";
import PropTypes from 'prop-types'
import cn from './gist-item.module.scss'

/**
 * This is SearchForm Method
 * this shows search bar in the Home page
 * @reactProps {string} title - welcome message
 */
const GistItem = (props) => {
    const { item } = props
    const { id, created_at, description, comments, owner } = item
    const { avatar_url, login } = owner

    const renderText = (firstValue, secondValue) => {
        return (
            <div className={cn.rowItem}>
                <div style={{ flex: 1 }}><p>{firstValue}</p></div>
                <div style={{ flex: 1 }}><p>{secondValue}</p></div>
            </div>
        )
    }

    return (
        <div className={cn.container}>
            <div className={cn.rowItem}>
                <img style={{ width: 50, height: 50, borderRadius: 25 }} src={avatar_url} alt="new" />
                <div style={{ flex: 1 }}>
                    {renderText(`Id: ${id}`, `Name: ${login}`)}
                    {renderText(`Created at: ${created_at}`, `Comments: ${comments}`)}
                    {renderText(`Description: ${description}`)}
                </div>
            </div>
        </div>
    )
}

GistItem.propTypes = {
    item: PropTypes.shape({
        id: PropTypes.string,
        created_at: PropTypes.string,
        description: PropTypes.string,
        comments: PropTypes.string,
        owner: PropTypes.shape({
            login: PropTypes.string,
            avatar_url: PropTypes.string,
        })
    })
}

GistItem.defaultProps = {
    item: {
        id: '#',
        created_at: '',
        description: '',
        comments: '',
        owner: {
            login: '',
            avatar_url: '',
        }
    }
}

export default GistItem
