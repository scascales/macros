import dataForm from './templates/dataForm.html';

const Data = Backbone.View.extend({

    initialize: function () {
        this.listenTo();
    }

    template: _.template(dataForm),
    
    render: function () {
        
    }
})
