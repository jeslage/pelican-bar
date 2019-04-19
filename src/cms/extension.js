import CMS from 'netlify-cms';

CMS.registerEditorComponent({
  // Internal id of the component
  id: 'dividerBox',
  // Visible label
  label: 'Divider Box',
  // Fields the user need to fill out when adding an instance of the component
  fields: [
    {
      label: 'Background',
      name: 'background',
      widget: 'select',
      options: ['green', 'yellow', 'blue', 'purple', 'salmon']
    },
    { label: 'Has Pattern', name: 'hasPattern', widget: 'boolean', default: false }
  ],
  // Pattern to identify a block as being an instance of this component
  pattern: /^dividerBox (\S+)$/,
  // Function to extract data elements from the regexp match
  fromBlock: match => {
    return {
      background: match[1],
      hasPattern: match[2]
    };
  },
  // Function to create a text block from an instance of this component
  toBlock: ({ background, hasPattern }) => {
    return `<divider-box background=${background} hasPattern=${hasPattern}></divider-box>`;
  },
  // Preview output for this component. Can either be a string or a React component
  // (component gives better render performance)
  toPreview: ({ background, hasPattern }) => {
    return `<divider-box background=${background} hasPattern=${hasPattern}></divider-box>`;
  }
});

CMS.registerEditorComponent({
  // Internal id of the component
  id: 'youtube',
  // Visible label
  label: 'Youtube',
  // Fields the user need to fill out when adding an instance of the component
  fields: [{ name: 'id', label: 'Youtube Video ID', widget: 'string' }],
  // Pattern to identify a block as being an instance of this component
  pattern: /^youtube (\S+)$/,
  // Function to extract data elements from the regexp match
  fromBlock: function(match) {
    return {
      id: match[1]
    };
  },
  // Function to create a text block from an instance of this component
  toBlock: function(obj) {
    return 'youtube ' + obj.id;
  },
  // Preview output for this component. Can either be a string or a React component
  // (component gives better render performance)
  toPreview: function(obj) {
    return (
      '<img src="http://img.youtube.com/vi/' + obj.id + '/maxresdefault.jpg" alt="Youtube Video"/>'
    );
  }
});
