var React = require('react');
var Masonry = require('react-masonry-component');

var masonryOptions = {
    transitionDuration: 0
};

var Gallery = React.createClass({
    render: function () {
        var childElements = this.props.elements.map(function(element,index){
           return (
           		<figure key={index} className="photo image-element-class">
           			<div className="ele-wrap">
						<img src={element.src} />
						<figcaption>
							<p>{element.desc}</p>
						</figcaption>
           			</div>
					
				</figure>
            );
        });

        return (
            <Masonry
                className={'my-gallery-class'} // default ''
                elementType={'div'} // default 'div'
                options={masonryOptions} // default {}
                disableImagesLoaded={false} // default false
                updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
            >
                {childElements}
            </Masonry>
        );
    }
});

module.exports = Gallery;