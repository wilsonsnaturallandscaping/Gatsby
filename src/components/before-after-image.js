import React, { useEffect, useRef, useState } from 'react'
import { ResizeSensor } from 'css-element-queries'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { StaticImage } from 'gatsby-plugin-image'

const propTypes = {
  handleSize: PropTypes.number,
  handle: PropTypes.node,
  hover: PropTypes.bool,
  leftImage: PropTypes.string.isRequired,
  leftImageAlt: PropTypes.string,
  leftImageCss: PropTypes.object, // eslint-disable-line
  leftImageLabel: PropTypes.string,
  onSliderPositionChange: PropTypes.func,
  rightImage: PropTypes.string.isRequired,
  rightImageAlt: PropTypes.string,
  rightImageCss: PropTypes.object, // eslint-disable-line
  rightImageLabel: PropTypes.string,
  skeleton: PropTypes.element,
  sliderLineColor: PropTypes.string,
  sliderLineWidth: PropTypes.number,
  sliderPositionPercentage: PropTypes.number,
}

const defaultProps = {
  handleSize: 46,
  handle: null,
  hover: false,
  leftImageAlt: '',
  leftImageCss: {},
  leftImageLabel: null,
  onSliderPositionChange: () => {},
  rightImageAlt: '',
  rightImageCss: {},
  rightImageLabel: null,
  skeleton: null,
  sliderLineColor: '#ffffff',
  sliderLineWidth: 4,
  sliderPositionPercentage: 0.5,
}

const Container = styled('div')`
  box-sizing: border-box;
  position: relative;
  width: 100%;
  overflow: hidden;
  transform: 'translateZ(0)';
  mask-image: radial-gradient(white, black);
`
const Label = styled('div')`
  background: rgba(255, 255, 255, 0.2);
  color: white;
  opacity: ${({ isSliding }) => (isSliding ? 0 : 0)};
  padding: 8px 18px;
  font-size: 15px;
  position: absolute;
  border-radius: 4px;
  z-index: 40;
  top: 50%;
  transform: translate(0, -50%);
  transition: opacity 0.1s ease-out;
`

const LeftLabel = styled(Label)`
  left: 3%;
`

const RightLabel = styled(Label)`
  right: 3%;
`

const Slider = styled('div')`
  align-items: center;
  cursor: ${({ hover }) => !hover && 'ew-resize'};
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  position: absolute;
  top: 0;
  width: ${({ handleSize }) => handleSize}px;
`

const Image = styled(`div`)`
  display: block;
  width: 100%;
  border-radius: 0.25em;
  transform: 'translateZ(0)';
  mask-image: radial-gradient(white, black);
`

const LeftImage = styled(Image)`
  height: 100%; // fit to the height of right(under) image
  object-fit: cover; // protrudes is hidden
  position: absolute;
  top: 0;
  margin-bottom: 0px !important;
  border-radius: 0.25em;
  ${({ leftImageCss }) => leftImageCss && css(leftImageCss)}
`

const RightImage = styled(Image)`
  height: auto; // Respect the aspect ratio
  margin-bottom: 0px !important;
  border-radius: 0.25em;
  ${({ rightImageCss }) => rightImageCss && css(rightImageCss)}
`

const Separator = styled('div')`
  background: ${({ sliderLineColor }) => sliderLineColor};
  -webkit-box-shadow: 0 0 12px rgba(51, 51, 51, 0.5);
  box-shadow: 0 0 12px rgba(51, 51, 51, 0.5);
  flex: 0 1 auto;
  z-index: 40;
  cursor: pointer;
  height: 100%;

  width: ${({ sliderLineWidth }) => sliderLineWidth}px;
`

const HandleDefault = styled('div')`
  align-items: center;
  cursor: pointer;
  border: ${({ sliderLineWidth }) => sliderLineWidth}px solid
    ${({ sliderLineColor }) => sliderLineColor};
  border-radius: 100%;
  -webkit-box-shadow: 0 0 12px rgba(51, 51, 51, 0.5);
  box-shadow: 0 0 12px rgba(51, 51, 51, 0.5);
  box-sizing: border-box;
  display: flex;
  z-index: 40;
  flex: 1 0 auto;
  height: ${({ handleSize }) => handleSize}px;
  justify-content: center;
  width: ${({ handleSize }) => handleSize}px;
`

function ReactCompareImage(props) {
  const {
    handleSize,
    handle,
    hover,
    leftImage,
    leftImageAlt,
    leftImageCss,
    leftImageLabel,
    onSliderPositionChange,
    rightImage,
    rightImageAlt,
    rightImageCss,
    rightImageLabel,
    skeleton,
    sliderLineColor,
    sliderLineWidth,
    sliderPositionPercentage,
  } = props

  // 0 to 1
  const [sliderPosition, setSliderPosition] = useState(sliderPositionPercentage)
  const [containerWidth, setContainerWidth] = useState(0)
  const [leftImgLoaded, setLeftImgLoaded] = useState(false)
  const [rightImgLoaded, setRightImgLoaded] = useState(false)
  const [isSliding, setIsSliding] = useState(false)
  const [firstInteraction, updateFirstInteraction] = useState(false)

  const containerRef = useRef()
  const handleRef = useRef()
  const rightImageRef = useRef()
  const leftImageRef = useRef()

  // keep track container's width in local state
  useEffect(() => {
    const updateContainerWidth = () => {
      const currentContainerWidth =
        containerRef.current.getBoundingClientRect().width
      setContainerWidth(currentContainerWidth)
    }

    // initial execution must be done manually
    updateContainerWidth()

    // update local state if container size is changed
    const containerElement = containerRef.current
    const handleElement = handleRef.current

    const resizeSensor = new ResizeSensor(containerElement, () => {
      updateContainerWidth()
    })

    return () => {
      resizeSensor.detach(containerElement)
    }
  }, [])

  const allImagesLoaded = rightImgLoaded && leftImgLoaded

  const rightGatsbyImageRef = useRef()

  useEffect(() => {
    let firstEvent
    let scrollLockWhenDragging = false
    let pageScrollLock = false
    let dragCount = 0
    const handleSliding = (event) => {
      try {
        const e = event || window.event
        if (e.type == 'touchstart') {
          dragCount = 0
          return false
        }

        if (e.type == 'touchmove' || e.type == 'touchend') {
          dragCount = dragCount + 1
          const previousState = firstEvent.touches[0]
          if (previousState) {
            const currentTouch = e.touches[0]
            const angle =
              (Math.atan2(
                Math.abs(previousState.pageY) - Math.abs(currentTouch.pageY),
                Math.abs(previousState.pageX) - Math.abs(currentTouch.pageX)
              ) *
                180) /
                Math.PI +
              180
            // console.log('angle', angle)
            const isScrollAngle =
              (angle > 45 && angle < 135) || (angle > 225 && angle < 315)
            if (dragCount == 1 && !isScrollAngle) {
              pageScrollLock = true
              if (!firstInteraction) {
                updateFirstInteraction(true)
              }
            }
            if (
              (!pageScrollLock && isScrollAngle) || //
              scrollLockWhenDragging
            ) {
              if (dragCount == 1 && isScrollAngle) scrollLockWhenDragging = true
              // scrollLockWhenDragging = true
              pageScrollLock = false
              // console.log('within the cancel range')

              // setIsSliding(false)
              return 0 // stop script from executing and allowing scrolling
            }
          }
        }

        // Calc Cursor Position from the left edge of the viewport
        const cursorXfromViewport = e.touches ? e.touches[0].pageX : e.pageX

        // Calc Cursor Position from the left edge of the window (consider any page scrolling)
        const cursorXfromWindow = cursorXfromViewport - window.pageXOffset

        // Calc Cursor Position from the left edge of the image
        const imagePosition = rightImageRef.current.getBoundingClientRect()

        let pos = cursorXfromWindow - imagePosition.left

        // Set minimum and maximum values to prevent the slider from overflowing
        const minPos = 0 + sliderLineWidth / 2
        const maxPos = containerWidth - sliderLineWidth / 2

        if (pos < minPos) pos = minPos
        if (pos > maxPos) pos = maxPos

        setSliderPosition(pos / containerWidth)

        // If there's a callback function, invoke it everytime the slider changes
        if (onSliderPositionChange) {
          onSliderPositionChange(pos / containerWidth)
        }
      } catch (e) {
        // console.log('handleSliding Error', e)
      }
    }

    const handleScrolling = (e) => {
      if (pageScrollLock) {
        e.preventDefault()
      }
    }

    const startSliding = (e) => {
      setIsSliding(true)

      // Prevent default behavior other than mobile scrolling
      if (!('touches' in e)) {
        e.preventDefault()
      }
      firstEvent = e

      // Slide the image even if you just click or tap (not drag)
      handleSliding(e)

      containerElement.addEventListener('mousemove', handleSliding) // 07
      containerElement.addEventListener('touchmove', handleSliding) // 08
      containerElement.addEventListener('touchend', handleSliding) // 08
      containerElement.addEventListener('touchcancel', handleSliding) // 08
    }

    const finishSliding = (e) => {
      if (!pageScrollLock) {
        setIsSliding(false)
        try {
          handleSliding(e)
        } catch (e) {
          console.log('e', e)
        }
      }
      scrollLockWhenDragging = false
      pageScrollLock = false
      containerElement.removeEventListener('mousemove', handleSliding)
      containerElement.removeEventListener('touchmove', handleSliding)
      containerElement.removeEventListener('touchend', handleSliding)
      containerElement.removeEventListener('touchcancel', handleSliding)
    }

    const containerElement = containerRef.current
    const handleElement = handleRef.current

    if (allImagesLoaded) {
      // it's necessary to reset event handlers each time the canvasWidth changes

      // for mobile
      containerElement.addEventListener('touchstart', startSliding) // 01
      containerElement.addEventListener('touchend', finishSliding) // 02
      window.addEventListener('touchmove', handleScrolling, { passive: false })
      // for desktop
      if (hover) {
        containerElement.addEventListener('mousemove', handleSliding) // 03
        containerElement.addEventListener('mouseleave', finishSliding) // 04
      } else {
        containerElement.addEventListener('mousedown', startSliding) // 05
        containerElement.addEventListener('mouseup', finishSliding) // 06
      }
    }

    return () => {
      // cleanup all event resteners
      containerElement.removeEventListener('touchstart', startSliding) // 01
      containerElement.removeEventListener('touchend', finishSliding) // 02
      window.removeEventListener('touchmove', handleScrolling)
      containerElement.removeEventListener('mousemove', handleSliding) // 03
      containerElement.removeEventListener('mouseleave', finishSliding) // 04
      containerElement.removeEventListener('mousedown', startSliding) // 05
      containerElement.removeEventListener('mouseup', finishSliding) // 06
      containerElement.removeEventListener('mousemove', handleSliding) // 07
      containerElement.removeEventListener('touchmove', handleSliding) // 08
    }
  }, [allImagesLoaded, containerWidth, hover, sliderLineWidth]) // eslint-disable-line

  // Image size set as follows.
  //
  // 1. right(under) image:
  //     width  = 100% of container width
  //     height = auto
  //
  // 2. left(over) imaze:
  //     width  = 100% of container width
  //     height = right image's height
  //              (protrudes is hidden by css 'object-fit: hidden')
  const styles = {
    handleCustom: {
      alignItems: 'center',
      boxSizing: 'border-box',
      display: 'flex',
      flex: '1 0 auto',
      height: 'auto',
      justifyContent: 'center',
      width: 'auto',
    },
    leftArrow: {
      border: `inset ${handleSize * 0.15}px rgba(0,0,0,0)`,
      borderRight: `${handleSize * 0.15}px solid ${sliderLineColor}`,
      height: '0px',
      marginLeft: `-${handleSize * 0.25}px`, // for IE11
      marginRight: `${handleSize * 0.25}px`,
      width: '0px',
    },
    rightArrow: {
      border: `inset ${handleSize * 0.15}px rgba(0,0,0,0)`,
      borderLeft: `${handleSize * 0.15}px solid ${sliderLineColor}`,
      height: '0px',
      marginRight: `-${handleSize * 0.25}px`, // for IE11
      width: '0px',
    },
  }

  return skeleton && !allImagesLoaded ? (
    <Container>{skeleton}</Container>
  ) : (
    <div className="shadow-lg border-radius">
      <Container
        ref={containerRef}
        data-testid="container"
        className="beforeafterslider shadow-lg border-radius overflow-hidden"
      >
        <RightImage className="right-ref" ref={rightImageRef}>
          <StaticImage
placeholder="blurred"
            ref={rightGatsbyImageRef}
            onLoad={() => setRightImgLoaded(true)}
            alt={rightImageAlt}
            data-testid="right-image"
                      src="../assets/home/home-after-one.jpg"
            rightImageCss={rightImageCss}
          />
        </RightImage>
        <LeftImage
          className="left-ref"
          ref={leftImageRef}
          style={{
            clip: `rect(auto, ${
              containerWidth * sliderPosition
            }px, auto, auto )`,
          }}
        >
          <StaticImage
          placeholder="blurred"
            onLoad={() => setLeftImgLoaded(true)}
            alt={leftImageAlt}
            data-testid="left-image"
            src="../assets/home/home-before-one.jpg"
            leftImageCss={leftImageCss}
          />
        </LeftImage>
        <div
          className={
            'beforeafterslideroverlay' + (firstInteraction ? '' : ' showing')
          }
        >
          {/* labels */}
          {leftImageLabel && (
            <LeftLabel isSliding={isSliding} className="labelsliderhover">
              {leftImageLabel}
            </LeftLabel>
          )}
          {rightImageLabel && (
            <RightLabel isSliding={isSliding} className="labelsliderhover">
              {rightImageLabel}
            </RightLabel>
          )}
        </div>

        <Slider
          hover={hover}
          handleSize={handleSize}
          style={{
            left: `${containerWidth * sliderPosition - handleSize / 2}px`,
          }}
        >
          <Separator
            sliderLineColor={sliderLineColor}
            sliderLineWidth={sliderLineWidth}
          />

          {handle ? (
            <div style={styles.handleCustom}>{handle}</div>
          ) : (
            <HandleDefault
              ref={handleRef}
              sliderLineColor={sliderLineColor}
              sliderLineWidth={sliderLineWidth}
              handleSize={handleSize}
            >
              <div style={styles.leftArrow} />
              <div style={styles.rightArrow} />
            </HandleDefault>
          )}
          <Separator
            sliderLineColor={sliderLineColor}
            sliderLineWidth={sliderLineWidth}
          />
        </Slider>
      </Container>
    </div>
  )
}
ReactCompareImage.propTypes = propTypes
ReactCompareImage.defaultProps = defaultProps
export default ReactCompareImage
