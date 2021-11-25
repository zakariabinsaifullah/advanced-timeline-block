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
    enableBorderRadius: {
        type: 'boolean',
        default: false
    },
    borderRadius: {
        type: 'number',
        default: 5
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
        default: '20 Dec 1994'
    },
    oppositeContentColor: {
        type: 'string',
        default: '#000000'
    },
    oppositeContentBg: {
        type: 'string',
        default: '#ffffff'
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
