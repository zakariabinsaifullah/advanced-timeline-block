const attributes= {
    // timeline Content
    contentBg: {
        type: 'string',
        default: '#F6D155'
    },
    enableBorder: {
        type: 'boolean',
        default: false
    }, 
    borderWidth: {
        type: 'number',
        default: 1
    },
    borderColor: {
        type: 'string',
        default: '#cccccc'
    },
    borderRadius: {
        type: 'number',
        default: 0
    },
    enableBoxShadow: {
        type: 'boolean',
        default: false
    },
    boxShadowStyle: {
        type: 'string',
        default: 'bxs_one'
    },      
    // Timeline Opposite Content
    showOppositeContent: {
        type: 'boolean',
        default: true,
    },
    oppositeContent: {
        type: 'string',
    },
    oppositeContentTag: {
        type: 'string',
        default: 'p'
    },
    oppositeContentColor: {
        type: 'string',
        default: '#000000'
    },
    oppositeContentBg: {
        type: 'string',
        default: '#ffffff'
    },
    enableOppositeBorder: {
        type: 'boolean',
        default: false
    },
    oppositeBorderWidth: {
        type: 'number',
        default: 1
    },
    oppositeBorderColor: {
        type: 'string',
        default: '#cccccc'
    },
    oppositeBorderRadius: {
        type: 'number',
        default: 0
    },
    enableOppositeBoxShadow: {
        type: 'boolean',
        default: false
    },
    oppositeBoxShadowStyle: {
        type: 'string',
        default: 'bxs_one'
    },
    // timeline marker 
    markerType: {
        type: 'string',
        default: 'circle'
    },
    markerIcon: {
        type: 'string',
        default: 'fas fa-plus-circle'
    },
    markerColor: {
        type: 'string',
        default: '#000000'
    },
    markerBg: {
        type: 'string',
        default: '#ffffff'
    },
    // connector 
    showConnector: {
        type: 'boolean',
        default: true,
    },
    connectorColor: {
        type: 'string',
        default: '#000000'
    }
};

export default attributes; 
