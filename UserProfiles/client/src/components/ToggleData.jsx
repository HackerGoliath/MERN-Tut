import React from 'react'

const ToggleData = () => {
    return (
        <div>
            <div>
                <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample1" aria-expanded="false" aria-controls="collapseExample">
                    Show1
                </button>
                <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample2" aria-expanded="false" aria-controls="collapseExample">
                    Show2
                </button>
                <div class="collapse" id="collapseExample1">
                    <p>Data 1 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet corporis iure mollitia odit nam vero architecto omnis rerum ea officia ipsa, nisi laudantium eius vel, accusamus quibusdam non quo! Quisquam consectetur assumenda voluptatem ducimus!</p>
                </div>
                <div class="collapse" id="collapseExample2">
                    <p>Data 2 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet corporis iure mollitia odit nam vero architecto omnis rerum ea officia ipsa, nisi laudantium eius vel, accusamus quibusdam non quo! Quisquam consectetur assumenda voluptatem ducimus!</p>
                </div>
            </div>

        </div>
    )
}

export default ToggleData