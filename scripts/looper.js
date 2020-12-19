/* code by AP from https://codepen.io/anon/pen/PQwVEZ, via https://stackoverflow.com/revisions/48532120/4 */

const loop = [];let state
const scr = _ => window.pageYOffset
document.addEventListener("DOMContentLoaded", _ => {
  loop.push(document.querySelector('.wrapper>.loop'))
	loop.push(loop[0].cloneNode(true))
	const wrapper = loop[0].parentNode
	const height = loop[0].scrollHeight
	loop.forEach((l,i) => {
		l.style.height = `${height}px`
		l.style.top = `${height*i}px`
	})
	wrapper.appendChild(loop[1])
	
	const currLoop = Symbol('loop')
	state = {
		[currLoop]: 0,
		get otherLoop() {return loop[state[currLoop]=(this[currLoop]+1)%2]},
		get loopScroll() {
			const cE = this.currElement
			return cE.scrollHeight+cE.offsetTop
		},
		get currElement() {return loop[this[currLoop]]},
		get currIndex() {return this[currLoop]},
		get goingDown() {return state.previous <= scr()},
		renderNext(scrollAmt) {
			console.log('Render next loop',{current: scr(), target: scrollAmt})
			const cLoop = state.otherLoop
			cLoop.style.top = `${scrollAmt}px`
			document.body.style.height = `${scrollAmt+height*2}px`
		},
		renderPrev(scrollAmt) {
			console.log('Render prev loop',{current: scr(), target: scrollAmt})
			const cLoop = state.otherLoop
			cLoop.style.top = `${scrollAmt-2*height}px`
			document.body.style.height = `${scrollAmt+height*2}px`
		},
	}
	window.addEventListener('scroll', e => {
		const scrollAmt = state.loopScroll
		console.log({current: scr(), target: scrollAmt})
		if (state.goingDown && scr() > scrollAmt-.2*height) state.renderNext(scrollAmt)
    else if (!state.goingDown && scr() < scrollAmt-.8*height) state.renderPrev(scrollAmt)
		state.previous = scr()
	})
})
