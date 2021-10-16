import React from "react";
import {getMergeSortAnimations} from "./mergesort";
import "./App.css";

let disabled = false;

export default class Sorting extends React.Component{
    constructor(props) {
        super(props);
    
        this.state = {
          array: [],
        };
      }

      componentDidMount() {
        this.resetArray();
      }

      resetArray() {
        if(disabled)return;
        const array = [];
        for (let i = 0; i < 1000; i++) {
          array.push(randomIntFromInterval(5, 730));
        }
        this.setState({array});
        const bars = document.getElementsByClassName("array-bar");
        for (let index = 0; index < bars.length; index++) {
          bars[index].style.backgroundColor = "lightskyblue";
        }
      }

      render(){
        const {array} = this.state;
        return (
            <div className="array-container">
              <p>Sorting Visualization</p>              

              {array.map((value, idx) => (
                <div
                  className="array-bar"
                  key={idx}
                  style={{
                    backgroundColor: "lightskyblue",
                    height: `${value}px`,
                  }}></div>
              ))}


              <button class = "button" onMouseLeave={()=>this.dehighlight_button("merge")} onMouseOver={()=>this.highlight_button("merge")} 
              id = "merge" onClick={()=> this.mergeSort()}> Merge Sort</button>

              <button class = "button" onMouseLeave={()=>this.dehighlight_button("keto")} onMouseOver={()=>this.highlight_button("keto")} 
              id = "keto" onClick={()=> this.ketosort()}>Keto Sort</button>

              <button class = "button" onMouseLeave={()=>this.dehighlight_button("insertion")} onMouseOver={()=>this.highlight_button("insertion")} 
              id = "insertion" onClick={()=> this.insertionsort()}>Insertion Sort</button>

              <button class = "button" onMouseLeave={()=>this.dehighlight_button("heap")} onMouseOver={()=>this.highlight_button("heap")} 
              id = "heap" onClick={()=> this.heapsort()}>Heap Sort</button>

              <button class = "button" onMouseLeave={()=>this.dehighlight_button("selection")} onMouseOver={()=>this.highlight_button("selection")} 
              id = "selection" onClick={()=> this.selectionSort()}>Selection Sort</button>

              <button class = "button" onMouseLeave={()=>this.dehighlight_button("shell")} onMouseOver={()=>this.highlight_button("shell")} 
              id = "shell" onClick={()=> this.shellsort()}>Shell Sort</button>

              <button class = "button" onMouseLeave={()=>this.dehighlight_button("cocktail")} onMouseOver={()=>this.highlight_button("cocktail")} 
              id = "cocktail" onClick={()=> this.cocktailsort()}>Cocktail Sort</button>

              <button class = "button" onMouseLeave={()=>this.dehighlight_button("bubble")} onMouseOver={()=>this.highlight_button("bubble")}
              id = "bubble" onClick={()=> this.bubbleSort()}>Bubble Sort</button>

              <button class = "button" onMouseLeave={()=>this.dehighlight_button("radix")} onMouseOver={()=>this.highlight_button("radix")} 
              id = "radix" onClick={()=> this.radixSort()}>Radix Sort</button>

              <button class = "button" onMouseLeave={()=>this.dehighlight_button("oddEven")} onMouseOver={()=>this.highlight_button("oddEven")} 
              id = "oddEven" onClick={()=> this.oddEvenSort()}>Odd-Even Sort</button>

              <button class = "button" onMouseLeave={()=>this.dehighlight_button("quick")} onMouseOver={()=>this.highlight_button("quick")} 
              id = "quick" onClick={()=> this.quicksort(this.state.array, 0, this.state.array.length-1)}>Quick Sort</button>
              
              <div class = "utility_header">
                <button class = "utility_button" onClick={()=> this.resetArray()}>Generate New Array</button>
                <button class = "utility_button" onClick={()=> window.location.reload(false)}>End Sort</button>
              </div>
              <div class = "info">
                <p>By Lakshya Jain(13)</p>
              </div>   
            </div>
          );
      }

      highlight_button(id){
        if(disabled)return;
        const thing = document.getElementById(id);
        thing.style.color = "red";
      }

      dehighlight_button(id){
        if(disabled)return;
        const thing = document.getElementById(id);
        thing.style.color = "gold";
      }

      disable_all_buttons(){
        const buttons = document.getElementsByClassName("button");
        for (let index = 0; index < buttons.length; index++) {
          buttons[index].style.backgroundColor = "grey";
          buttons[index].style.color = "lightgrey";
        }
        disabled=true;
      }

      enable_all_buttons(){
        const buttons = document.getElementsByClassName("button");
        for (let index = 0; index < buttons.length; index++) {
          buttons[index].style.backgroundColor = "#ffffff07";
          buttons[index].style.color = "gold";
        }
        disabled=false;
      }

      mergeSort() 
      {
        if(disabled){
          this.on_click_but_its_disabled();
          return;
        }
        this.resetArray();
     //Loop through and assign animations
        const animations = getMergeSortAnimations(this.state.array);
        for (let i = 0; i < animations.length; i++) {
          const arrayBars = document.getElementsByClassName('array-bar');
          const isColorChange = i % 3 !== 2;
          if (isColorChange) {
            const [barOneIdx, barTwoIdx] = animations[i];
            const barOneStyle = arrayBars[barOneIdx].style;
            const barTwoStyle = arrayBars[barTwoIdx].style;
            const color = i % 3 === 0 ? "red" : "lightskyblue";
            setTimeout(() => {
              barOneStyle.backgroundColor = color;
              barTwoStyle.backgroundColor = color;
            }, i * 1);
          } 
          else {
            setTimeout(() => {
              const [barOneIdx, newHeight] = animations[i];
              const barOneStyle = arrayBars[barOneIdx].style;
              barOneStyle.height = `${newHeight}px`;
            }, i * 1);
          }
        }
      }

      ketosort()
      {
          if(disabled){
            this.on_click_but_its_disabled();
            return;
          }
          this.resetArray();
          const aux = this.state.array;
          const arraybars = document.getElementsByClassName('array-bar')
          for (let i = 0; i < aux.length; i++) {
            for (let j = 0; j < aux.length-i+1; j++) 
            {
              if(aux[j]>aux[j+1])
              {
                var temp = aux[j];
                aux[j] = aux[j+1];
                aux[j+1] = temp;
                setTimeout(() => {
                  const barOneStyle = arraybars[j].style;
                  const barTwoStyle = arraybars[j+1].style;
                  barOneStyle.height = `${aux[j]}px`;
                  barTwoStyle.height = `${aux[j+1]}px`;
                  barOneStyle.backgroundColor = 'lightskyblue';
                  barTwoStyle.backgroundColor = 'lightskyblue';
                }, j * 10);
              }
              else if (aux[j]<=aux[j+1]){
                try{
                  setTimeout(() => {
                    arraybars[i].style.backgroundColor = 'red';
                    arraybars[i].style.height = `${aux[j+1]}px`;
                  }, j * 10);
                }
    
                catch{
                  console.log("Of course, a javascript error les go!");
                }
              }
            }
          }
      }
      
      on_click_but_its_disabled(){
        console.log("DUDE WHAT M8!");
      }

    async quicksort(arr,start,end){
      const bars = document.getElementsByClassName('array-bar');
      for (let index = 0; index < bars.length; index++) {
        bars[index].style.backgroundColor = "lightskyblue";
      }
      
      if(start>=end){
        return;
      }

      let index = await partition(arr,start,end);
      bars[index].style.backgroundColor = "red";

      for (let i = 0; i < arr.length; i++) {
        bars[i].style.height = `${arr[i]}px`;
        await sleep(0.1);
      }
      await Promise.all([
        this.quicksort(arr, start, index-1),
        this.quicksort(arr, index+1, end)
      ]);
    }

    async insertionsort(){
      if(disabled){
        this.on_click_but_its_disabled();
        return;
      }
      this.resetArray();
      this.disable_all_buttons();
      const bars = document.getElementsByClassName("array-bar");
      let inputArr = this.state.array;
      let n = inputArr.length;
      for (let i = 1; i < n; i++) {
          //Set Background Color
          bars[i].style.backgroundColor = "red";
          // Choosing the first element in our unsorted subarray
          let current = inputArr[i];

          // The last element of our sorted subarray
          let j = i-1; 

          while ((j > -1) && (current < inputArr[j])) {
              await sleep(0.001);
              inputArr[j+1] = inputArr[j];
              bars[j].style.height=`${inputArr[j]}px`;
              bars[j].style.backgroundColor="lightskyblue";
              j--;
          }
          inputArr[j+1] = current;
      }
      console.log(inputArr);
      await sleep(10);
      this.enable_all_buttons();
    }

    async heapsort()
    {
        if(disabled){
          this.on_click_but_its_disabled();
          return;
        }
        this.resetArray();
        this.disable_all_buttons();
        const bars = document.getElementsByClassName("array-bar");
        let arr = this.state.array;
        var n = arr.length;
 
        // Build heap (rearrange array)
        for (var i = Math.floor(n / 2) - 1; i >= 0; i--){
          this.heapify(arr, n, i);
          await sleep(1);
        }
 
        await sleep(10);
        // One by one extract an element from heap
        for (var x = n - 1; x > 0; x--) {
            // Move current root to end
            var temp = arr[0];
            arr[0] = arr[x];
            arr[x] = temp;
 
            // call max heapify on the reduced heap
            await this.heapify(arr, x, 0);
            await sleep(10);
            bars[x].style.backgroundColor = "lightskyblue";
            bars[x].style.height = `${arr[x]}px`;
        }

        //Some Safety bcuz the algorithm leaves the last one for some reason XD
        bars[0].style.height = `${arr[0]}px`;
        bars[0].style.backgroundColor = "lightskyblue";

        await sleep(10);
        this.enable_all_buttons();
    }

    async cocktailsort()
    {
       if(disabled){
         this.on_click_but_its_disabled();
         return;
       }
       this.resetArray();
       this.disable_all_buttons();
       const bars = document.getElementsByClassName("array-bar");
       let a = this.state.array;
       let swapped = true;
       let start = 0;
       let end = a.length;
       while (swapped == true) 
       {
  
        // reset the swapped flag on entering the
        // loop, because it might be true from a
        // previous iteration.
        swapped = false;

        // loop from bottom to top same as
        // the bubble sort
        for (let i = start; i < end - 1; ++i) 
        {
            let final = 0;
            if (a[i] > a[i + 1]) 
            {
                await swap(a,i,i+1);
                await sleep(0.01);
                bars[i].style.height = `${a[i]}px`;
                bars[i+1].style.height = `${a[i+1]}px`;
                let final = i+1;
                for (let index = 0; index < bars.length; index++) {
                  bars[index].style.backgroundColor = "lightskyblue";
                }
                bars[final].style.backgroundColor = "red";
                swapped = true;
            }
        }

        // if nothing moved, then array is sorted.
        if (swapped == false)
            break;

        // otherwise, reset the swapped flag so that it
        // can be used in the next stage
        swapped = false;

        // move the end point back by one, because
        // item at the end is in its rightful spot
        end = end - 1;

        // from top to bottom, doing the
        // same comparison as in the previous stage
        for (let i = end - 1; i >= start; i--) {
            if (a[i] > a[i + 1]) {
              await swap(a,i,i+1);
              await sleep(0.01);
              bars[i].style.height = `${a[i]}px`;
              bars[i+1].style.height = `${a[i+1]}px`;
              let final = i+1;
              for (let index = 0; index < bars.length; index++) {
                bars[index].style.backgroundColor = "lightskyblue";
              }
              bars[final].style.backgroundColor = "red";
              swapped = true;
            }
        }

        // increase the starting point, because
        // the last stage would have moved the next
        // smallest number to its rightful spot.
        start = start + 1;

        console.log(a);
        for (let index = 0; index < bars.length; index++) {
          bars[index].style.backgroundColor = "lightskyblue";
        }

        await sleep(10);
        this.enable_all_buttons();
    }
  }
    
    async heapify(arr, n, i)
    {
        const bars = document.getElementsByClassName("array-bar");
        var largest = i; // Initialize largest as root
        var l = 2 * i + 1; // left = 2*i + 1
        var r = 2 * i + 2; // right = 2*i + 2
 
        // If left child is larger than root
        if (l < n && arr[l] > arr[largest])
            largest = l;
 
        // If right child is larger than largest so far
        if (r < n && arr[r] > arr[largest])
            largest = r;
 
        // If largest is not root
        if (largest !== i) {
            var swap = arr[i];
            arr[i] = arr[largest];
            arr[largest] = swap;

            const style1 = bars[i].style;
            const style2 = bars[largest].style;
            style1.backgroundColor = "red";
            style2.backgroundColor = "red";
            style1.height = `${arr[i]}px`;
            style2.height = `${arr[largest]}px`;
 
            // Recursively heapify the affected sub-tree
            this.heapify(arr, n, largest);
        }

        await sleep(1);
    }

    async selectionSort()
    {
      if(disabled){
        this.on_click_but_its_disabled();
        return;
      }
      this.resetArray();
      this.disable_all_buttons();
      const bars = document.getElementsByClassName("array-bar");
      let arr = this.state.array;
      let n = arr.length;
      for (let i = 0; i < n; i++)
      {
          for (let index = 0; index < bars.length; index++) {
            bars[index].style.backgroundColor = "lightskyblue";
          }

          // Find the minimum element in unsorted array
          let min_idx = i;
          for (let j = i + 1; j < n; j++){
              await sleep(0.00001);
              bars[j].style.backgroundColor = "lightgreen";
              if (arr[j] < arr[min_idx]){
                bars[min_idx].style.backgroundColor = "lightskyblue";
                min_idx = j;
                bars[min_idx].style.backgroundColor = "red";
              }
          }
  
          // Swap the found minimum element with the first element
          await swap(arr,min_idx, i);
          bars[i].style.backgroundColor = "lightskyblue";
          bars[i].style.height = `${arr[i]}px`;
      }

      console.log(arr);

      //Some Safety bcuz the algorithm leaves the last one for some reason XD
      bars[0].style.height = `${arr[0]}px`;
      bars[0].style.backgroundColor = "lightskyblue";

      await sleep(10);
      this.enable_all_buttons();
    }

    async shellsort()
    {
        if(disabled){
          this.on_click_but_its_disabled();
          return;
        }
        this.resetArray();
        this.disable_all_buttons();
        let arr = this.state.array;
        let n = arr.length;
        const bars = document.getElementsByClassName("array-bar");
  
        // Start with a big gap, then reduce the gap
        for (let gap = Math.floor(n/2); gap > 0; gap = Math.floor(gap/2))
        {
            await sleep(10);
            // Do a gapped insertion sort for this gap size.
            // The first gap elements a[0..gap-1] are already
            // in gapped order keep adding one more element
            // until the entire array is gap sorted
            for (let i = gap; i < n; i += 1)
            {
                for (let index = 0; index < bars.length; index++) {
                  bars[index].style.backgroundColor = "lightskyblue";
                }
                bars[i].style.backgroundColor = "red";
                // add a[i] to the elements that have been gap
                // sorted save a[i] in temp and make a hole at
                // position i
                let temp = arr[i];
  
                // shift earlier gap-sorted elements up until
                // the correct location for a[i] is found
                let j;
                for (j = i; j >= gap && arr[j - gap] > temp; j -= gap){
                  arr[j] = arr[j - gap];
                  bars[j].style.height = `${arr[j]}px`;
                }
  
                // put temp (the original a[i]) in its correct
                // location
                arr[j] = temp;
                bars[i].style.height = `${arr[i]}px`;
                await sleep(8);
            }
        }

        for (let index = 0; index < bars.length; index++) {
          bars[index].style.backgroundColor = "lightskyblue";
        }
        bars[0].style.height = `${arr[0]}px`;

        console.log(arr);
        await sleep(10);
        this.enable_all_buttons();
    } 

    async bubbleSort() {
      if(disabled){
        this.on_click_but_its_disabled();
        return;
      }
      this.resetArray();
      this.disable_all_buttons();
      let items = this.state.array;
      const bars = document.getElementsByClassName("array-bar");
      var length = items.length;  
      for (var i = 0; i < length; i++) 
      {
        for (var j = 0; j < (length - i - 1); j++) 
        { 
          var final = 0;
          if(items[j] > items[j+1]) 
          {
             await swap(items,j,j+1);
             //bars[j].style.backgroundColor = "red";
             //bars[j+1].style.backgroundColor = "red"
             bars[j].style.height = `${items[j]}px`;
             bars[j+1].style.height = `${items[j+1]}px`;
             final = j+1;
             for (let index = 0; index < bars.length; index++) {
              bars[index].style.backgroundColor = "lightskyblue";
             }
             bars[final].style.backgroundColor = "red";
             await sleep(0.01);
          }
          bars[final].style.backgroundColor = "red";
        }
        
        for (let index = 0; index < bars.length; index++) {
          bars[index].style.backgroundColor = "lightskyblue";
        }
      }

      console.log(items);
      await sleep(10);
      this.enable_all_buttons();
    }

    async radixSort () {
      if(disabled){
        this.on_click_but_its_disabled();
        return;
      }
      this.resetArray();
      this.disable_all_buttons();
      const bars = document.getElementsByClassName("array-bar");
      let arr = this.state.array;
      var idx1, idx2, idx3, len1, len2, radix, radixKey;
      var radices = {}, buckets = {}, num, curr;
      var currLen, currBucket;
    
      len1 = arr.length;
      len2 = 10;  // radix sort uses ten buckets
    
      // find the relevant radices to process for efficiency        
      for (idx1 = 0;idx1 < len1;idx1++) {
        await sleep(3);
        for (let index = 0; index < bars.length; index++) {
          bars[index].style.backgroundColor = "lightskyblue";
        }
        bars[idx1].style.backgroundColor = "red";
        radices[arr[idx1].toString().length] = 0;
      }

      for (let index = 0; index < bars.length; index++) {
        bars[index].style.backgroundColor = "lightskyblue";
      }
    
      // loop for each radix. For each radix we put all the items
      // in buckets, and then pull them out of the buckets.
      for (radix in radices) {       
        for (let index = 0; index < bars.length; index++) {
          bars[index].style.backgroundColor = "lightskyblue";
        }   
        // put each array item in a bucket based on its radix value
        len1 = arr.length;
        for (idx1 = 0;idx1 < len1;idx1++) {
          curr = arr[idx1];
          bars[idx1].style.backgroundColor = "red";
          // item length is used to find its current radix value
          currLen = curr.toString().length;
          // only put the item in a radix bucket if the item
          // key is as long as the radix
          if (currLen >= radix) {
            // radix starts from beginning of key, so need to
            // adjust to get redix values from start of stringified key
            await sleep(3);
            bars[idx1].style.backgroundColor = "lightskyblue";
            radixKey = curr.toString()[currLen - radix];
            // create the bucket if it does not already exist
            if (!buckets.hasOwnProperty(radixKey)) {
              buckets[radixKey] = [];
              await sleep(3);
              bars[idx1].style.backgroundColor = "green";
            }
            // put the array value in the bucket
            buckets[radixKey].push(curr);          
          } 
          else {
            if (!buckets.hasOwnProperty('0')) {
              await sleep(10);
              bars[idx1].style.backgroundColor = "green";  
              buckets['0'] = [];
            }
            buckets['0'].push(curr);
            await sleep(3);
            bars[idx1].style.backgroundColor = "green";          
          }
        }
        // for current radix, items are in buckets, now put them
        // back in the array based on their buckets
        // this index moves us through the array as we insert items
        idx1 = 0;

        // go through all the buckets
        for (idx2 = 0;idx2 < len2;idx2++) {
          // only process buckets with items
          if (buckets[idx2] != null) {
            currBucket = buckets[idx2];
            // insert all bucket items into array
            len1 = currBucket.length;
            for (idx3 = 0;idx3 < len1;idx3++) {
              arr[idx1++] = currBucket[idx3];
            }
          }
        }
        for (let j = 0; j < arr.length; j++) {
          await sleep(10);
          for (let index = 0; index < bars.length; index++) {
            bars[index].style.backgroundColor = "lightskyblue";
          }   
          bars[j].style.height = `${arr[j]}px`;  
          bars[j].style.backgroundColor = "red";           
        }
        for (let index = 0; index < bars.length; index++) {
          bars[index].style.backgroundColor = "lightskyblue";
        }   
        buckets = {};
      }

      console.log(arr);
      await sleep(10);
      this.enable_all_buttons();
    }

    async oddEvenSort()
    {
        if(disabled){
          this.on_click_but_its_disabled();
          return;
        }
        this.resetArray();
        this.disable_all_buttons();
        const bars = document.getElementsByClassName("array-bar");
        let arr = this.state.array;
        let n = arr.length;
        let isSorted = false;
         
        while (!isSorted)
        {
            isSorted = true; 
            var final = 0;
            var final2 = 0;
            // Perform Bubble sort on odd indexed element
            for (let i=1; i<=n-2; i=i+2)
            {
                if (arr[i] > arr[i+1])
                {
                    await swap(arr,i,i+1);
                    await sleep(3);
                    bars[i].style.height = `${arr[i]}px`;
                    bars[i+1].style.height = `${arr[i+1]}px`;
                    isSorted = false;
                    final = i+1;
                    for (let index = 0; index < bars.length; index++) {
                     bars[index].style.backgroundColor = "lightskyblue";
                    }
                    bars[final].style.backgroundColor = "red";
                }
            }
   
            // Perform Bubble sort on even indexed element
            for (let i=0; i<=n-2; i=i+2)
            {
                if (arr[i] > arr[i+1])
                {
                    await swap(arr,i,i+1);
                    await sleep(3);
                    bars[i].style.height = `${arr[i]}px`;
                    bars[i+1].style.height = `${arr[i+1]}px`;
                    isSorted = false;
                    final2 = i+1;
                    for (let index = 0; index < bars.length; index++) {
                     bars[index].style.backgroundColor = "lightskyblue";
                    }
                    bars[final2].style.backgroundColor = "purple";
                }
            }
        }

        for (let index = 0; index < bars.length; index++) {
          bars[index].style.backgroundColor = "lightskyblue";
        }
        console.log(arr);
        await sleep(10);
        this.enable_all_buttons();
    }
}

function randomIntFromInterval(min, max) {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
}

async function partition(arr,start,end){
  let pivotIndex = start;
  let pivotValue = arr[end];
  for (let i = start; i < end; i++) {
    if(arr[i] < pivotValue){
      await swap(arr,i,pivotIndex);
      pivotIndex++;
    }
  }

  await swap(arr,pivotIndex,end);
  return pivotIndex;
}

async function swap(arr,a,b){
  let temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}

function sleep(ms){
  return new Promise(resolve=>setTimeout(resolve,ms));
}