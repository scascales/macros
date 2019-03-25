const dataUser = Backbone.Model.extend({
    defaults: {
        height: null,
        weight: null
    }
});

const dataCollection = Backbone.Collection.extend({
    model: dataUser;
});

export {dataUser, dataCollection};
