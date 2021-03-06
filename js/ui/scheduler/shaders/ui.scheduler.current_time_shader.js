const $ = require('../../../core/renderer');
const Class = require('../../../core/class');
const getBoundingRect = require('../../../core/utils/position').getBoundingRect;

const DATE_TIME_SHADER_CLASS = 'dx-scheduler-date-time-shader';

const currentTimeShader = Class.inherit({
    render: function(workspace) {
        this._workspace = workspace;
        this._$container = workspace._dateTableScrollable.$content();

        this._$shader = this._createShader();
        this._shader = [];
        this._shader.push(this._$shader);

        this._renderShader();

        if(this._$shader && this._workspace.option('crossScrollingEnabled')) {
            this._$shader.css('marginTop', -getBoundingRect(this._$container.get(0)).height);
            this._$shader.css('height', getBoundingRect(this._$container.get(0)).height);
        }

        this._shader.forEach((shader, index) => {
            this._$container.append(shader);
        });
    },

    _createShader: function() {
        return $('<div>').addClass(DATE_TIME_SHADER_CLASS);
    },

    clean: function() {
        this._$container && this._$container.find('.' + DATE_TIME_SHADER_CLASS).remove();
    }
});

module.exports = currentTimeShader;
