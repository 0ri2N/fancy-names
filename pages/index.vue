<template>
  <div>
    <Modal v-if="noWeb3" />
    <Notification v-if="notification" />

<nav class="bg-gray-800">
  <div class="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
    <div class="relative flex items-center justify-between h-16">
      <div class="flex items-center px-2 lg:px-0">
        <div class="flex-shrink-0">
          <img class="block lg:hidden h-8 w-auto" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAVYAAABaCAMAAADUxI5+AAAAaVBMVEVHcEz///////////////////+C48f5/v2j69f///////////////////8AzJv////////9//3///////////////////8GzZwD0J4EzJwLzZz///////////8TzZ1g27r///8Az50A2aXqnp14AAAAIHRSTlMA3R2g9kAPBAL7yGEU6fItfzVTkdS5bp/01W0ksas1k0Yf8mMAABI9SURBVHja7FuLtqo6EgQE0lFRHspWUVf0/z9yujsBOghH2Ht71szcy3kIApEURaXTXQRFoIIfLvltdVsN/65u+wCCf+wSlj/DFSAIzeiS/PyG/Q/Dan6GK8K6NrF+XUwCavwEgMm24CME/1S7f4RVl6B+dMlro2ez1fVvpJtKuY/BLlBKfOdvvdtrvwPZvvzB7iux+muwmh/xldk6VwSog2l6T92q13n8t40iwkANT5n6eLeXEaOfjKItrb7eS3g94dfYinz9Pq4I62GMrXoEVrz8y3mHy/kr9fsCARSrQ6zj7LrxcIVgQ+NfYw9XQUlbUQcgFDRAul+CYL/qt1pUoT5mcRwfqr3ED4K0Wt1qd2iO56W/ii7Cqn/CV2brPBEAuJ+fp9PjsXs8d/dUPsqBWtl7gS0dGiFKKljR9eUtcPxbXfSigg1d/tGeoIKKmqgDeXoSurtsTOXRPKIvuSUihtHbX4aVe/NtfZ2vrRDcEc7H8/F8ErB32UdqI7b9j43e92cqqEwcmzWrMdLR0GC4l7DicBkzffHehHT6Rp6dGGPbpY+b/Mlthl8d+EQ44m/8Nqya7+V3+TpbBPCxOyOqp6/75YIfz7N8UlfU6+smKVca10LVdZF2UeuMpApyTYSWsPIXG7s3YbpvOoYgJWNsLqvKpOb7lgf9ri3+ota1UvwMmPj32Wpx/R5f54oAgLogqrs7rae48ujoqqAgEtY8aBcERN99erAJq9w+rese404E8Nwjw6rsoT1bFdDtCrf88NPOuFdlgpUI1dBI9glYdYvrt/g6NxJAsu4ej+eFVCOFr+fz+dWGWZasKw5zFBBQYaeCVlu1WeOxCjWAlz14bCVMKDJVmfG0lcmKSgw2fsLw2tSghAjQ0Ue6iuOH2Pp9vs4VAVLWx2kHdAKun78uLVuRx1k7eiB1xIbTVu0Y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" alt="Workflow">
          <img class="hidden lg:block h-8 w-auto" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAVYAAABaCAMAAADUxI5+AAAAaVBMVEVHcEz///////////////////+C48f5/v2j69f///////////////////8AzJv////////9//3///////////////////8GzZwD0J4EzJwLzZz///////////8TzZ1g27r///8Az50A2aXqnp14AAAAIHRSTlMA3R2g9kAPBAL7yGEU6fItfzVTkdS5bp/01W0ksas1k0Yf8mMAABI9SURBVHja7FuLtqo6EgQE0lFRHspWUVf0/z9yujsBOghH2Ht71szcy3kIApEURaXTXQRFoIIfLvltdVsN/65u+wCCf+wSlj/DFSAIzeiS/PyG/Q/Dan6GK8K6NrF+XUwCavwEgMm24CME/1S7f4RVl6B+dMlro2ez1fVvpJtKuY/BLlBKfOdvvdtrvwPZvvzB7iux+muwmh/xldk6VwSog2l6T92q13n8t40iwkANT5n6eLeXEaOfjKItrb7eS3g94dfYinz9Pq4I62GMrXoEVrz8y3mHy/kr9fsCARSrQ6zj7LrxcIVgQ+NfYw9XQUlbUQcgFDRAul+CYL/qt1pUoT5mcRwfqr3ED4K0Wt1qd2iO56W/ii7Cqn/CV2brPBEAuJ+fp9PjsXs8d/dUPsqBWtl7gS0dGiFKKljR9eUtcPxbXfSigg1d/tGeoIKKmqgDeXoSurtsTOXRPKIvuSUihtHbX4aVe/NtfZ2vrRDcEc7H8/F8ErB32UdqI7b9j43e92cqqEwcmzWrMdLR0GC4l7DicBkzffHehHT6Rp6dGGPbpY+b/Mlthl8d+EQ44m/8Nqya7+V3+TpbBPCxOyOqp6/75YIfz7N8UlfU6+smKVca10LVdZF2UeuMpApyTYSWsPIXG7s3YbpvOoYgJWNsLqvKpOb7lgf9ri3+ota1UvwMmPj32Wpx/R5f54oAgLogqrs7rae48ujoqqAgEtY8aBcERN99erAJq9w+rese404E8Nwjw6rsoT1bFdDtCrf88NPOuFdlgpUI1dBI9glYdYvrt/g6NxJAsu4ej+eFVCOFr+fz+dWGWZasKw5zFBBQYaeCVlu1WeOxCjWAlz14bCVMKDJVmfG0lcmKSgw2fsLw2tSghAjQ0Ue6iuOH2Pp9vs4VAVLWx2kHdAKun78uLVuRx1k7eiB1xIbTVu0Y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" alt="Workflow">
        </div>
        <div class="hidden lg:block lg:ml-6">
          <div v-if="false" class="flex space-x-4">
            <a href="#" class="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium">Dashboard</a>
          </div>
        </div>
      </div>
      <div v-if="accounts" class="flex-1 flex justify-center px-2 lg:ml-6 lg:justify-end">
        <div v-if="ethereumAddress" class="max-w-lg w-full lg:max-w-xs">
          <div class="relative">
            <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <!-- Heroicon name: solid/search -->
<svg class="w-6 h-6 text-gray-400 mr-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"></path></svg>
            
            </div>
            <input disabled :value="ethereumAddress" id="search" name="search" class="block w-full pl-10 pr-3 py-2 border border-transparent rounded-md leading-5 bg-gray-700 text-gray-300 placeholder-gray-400 focus:outline-none focus:bg-white focus:border-white focus:ring-white focus:text-gray-900 sm:text-sm" placeholder="Syncing..." type="text">
          </div>
        </div>
        <button @click="connect" v-if="accounts.length < 1 && !ethereumAddress" type="button" class="relative inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-500 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-indigo-500">
            <!-- Heroicon name: solid/plus -->
            <svg class="-ml-1 mr-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clip-rule="evenodd" />
            </svg>
            <span>Connect Account</span>
          </button>
      </div>
      <div class="flex lg:hidden">
        <!-- Mobile menu button -->
        <button type="button" class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
            <img class="h-8 w-8 rounded-full" src="/oad.png" alt="">
        </button>
      </div>
      <div class="hidden lg:block lg:ml-4">
        <div class="flex items-center">
          <!-- Profile dropdown -->
          <div class="ml-4 relative flex-shrink-0">
            <div>
              <button type="button" class="bg-gray-800 rounded-full flex text-sm text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                <span class="sr-only">Open user menu</span>
                <img class="h-8 w-8 rounded-full" src="/oad.png" alt="">
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</nav>

<!-- This example requires Tailwind CSS v2.0+ -->
<div class="bg-gray-100">
  <div class="pt-12">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center">
        <h2 class="text-3xl font-extrabold text-gray-900 sm:text-4xl lg:text-5xl">
          Fancy Names
        </h2>
        <p class="mt-4 text-xl text-gray-600">
          Generate and assign a unique fancy name to your address. With blockchain technology your name will be unique and unrepeatable and above all – <strong>assigned for eternity</strong>.
        </p>
      </div>

<!-- This example requires Tailwind CSS v2.0+ -->
<div v-if="isSync" class="rounded-md mt-12 bg-yellow-50 p-4">
  <div class="flex">
    <div class="flex-shrink-0">
      <!-- Heroicon name: solid/information-circle -->
      <svg class="h-5 w-5 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd" />
      </svg>
    </div>
    <div class="ml-3 flex-1 md:flex md:justify-between">
      <p class="text-sm text-yellow-700">
        Syncing and downloading data ...
      </p>
    </div>
  </div>
</div>

    </div>
  </div>
  <div class="mt-8 bg-white pb-12 sm:mt-12">
    <div class="relative">
      <div class="absolute inset-0 h-1/2 bg-gray-100"></div>
      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-lg mx-auto rounded-lg shadow-lg overflow-hidden lg:max-w-none lg:flex">
          <div class="flex-1 bg-white px-6 py-8 lg:p-12">
            <h3 class="text-2xl font-extrabold text-gray-900 sm:text-3xl">
              Hackathon: Nervos - Broaden the Spectrum 
            </h3>
            <p class="mt-6 text-base text-gray-500">
              This project was created as a solution to the needs of solving issues with Hackaton Nervos. I had a great time creating it and I hope you will like it too, dear observer. 
            </p>
            <p class="mt-5 italic">If, despite many attempts, you fail to generate the name, open the console, check the error it displays and report it on GitHub!</p>

            <div class="mt-8">
              <div class="flex items-center">
                <h4 class="flex-shrink-0 pr-4 bg-white text-sm tracking-wider font-semibold uppercase text-yellow-600">
                 What will your name consist of
                </h4>
                <div class="flex-1 border-t-2 border-gray-200"></div>
              </div>
              
              <ul class="mt-8 space-y-5 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-5">
                <li class="flex items-start lg:col-span-1">
                  <div class="flex-shrink-0">
                    <!-- Heroicon name: solid/check-circle -->
                    <svg class="h-5 w-5 text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                    </svg>
                  </div>
                  <p class="ml-3 text-sm text-gray-700">
                    Adjectives
                  </p>
                </li>

                <li class="flex items-start lg:col-span-1">
                  <div class="flex-shrink-0">
                    <!-- Heroicon name: solid/check-circle -->
                    <svg class="h-5 w-5 text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                    </svg>
                  </div>
                  <p class="ml-3 text-sm text-gray-700">
                    Colors
                  </p>
                </li>

                <li class="flex items-start lg:col-span-1">
                  <div class="flex-shrink-0">
                    <!-- Heroicon name: solid/check-circle -->
                    <svg class="h-5 w-5 text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                    </svg>
                  </div>
                  <p class="ml-3 text-sm text-gray-700">
                    Animals
                  </p>
                </li>

                <li class="flex items-start lg:col-span-1">
                  <div class="flex-shrink-0">
                    <!-- Heroicon name: solid/check-circle -->
                    <svg class="h-5 w-5 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                    </svg>
                  </div>
                  <p class="ml-3 text-sm font-semibold text-yellow-600">
                    Star Wars! <u>(only if ckbETH greater than zero)</u>
                  </p>
                </li>
              </ul>


            </div>

            <div class="mt-12 text-lg text-gray-600">
                <h4 class="flex-shrink-0 pr-4 text-sm tracking-wider font-semibold uppercase text-yellow-600">
                 Ethereum Address
                </h4>
                <div class="flex-1 border-t-2 mt-2 border-gray-200"></div>
            <div class="pl-3 pr-4 py-3 flex items-center bg-gray-200 justify-between text-sm">
              <div class="w-0 flex-1 flex items-center">
                <!-- Heroicon name: solid/paper-clip -->
                <svg class="flex-shrink-0 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd" d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z" clip-rule="evenodd" />
                </svg>
                <content-loader v-if="isSync" class="ml-2" width="100" height="3"></content-loader>
                <input v-else :value="ethereumAddress" id="ethereumAddress" class="bg-gray-200 ml-2 flex-1 w-0 truncate" />
              </div>
              <div class="ml-4 flex-shrink-0">
                <a @click="copy('ethereumAddress')" class="font-medium text-yellow-600 font-semibold hover:text-yellow-500">
                  Copy
                </a>
              </div>
            </div>
            </div>

                        <div class="mt-8 text-lg text-gray-600">
                <h4 class="flex-shrink-0 pr-4 text-sm tracking-wider font-semibold uppercase text-yellow-600">
                 Polyjuice Address
                </h4>
                <div class="flex-1 border-t-2 mt-2 border-gray-200"></div>
            <div class="pl-3 pr-4 py-3 flex items-center bg-gray-200 justify-between text-sm">
              <div class="w-0 flex-1 flex items-center">
                <!-- Heroicon name: solid/paper-clip -->
                <svg class="flex-shrink-0 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd" d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z" clip-rule="evenodd" />
                </svg>
                <content-loader v-if="isSync" class="ml-2" width="100" height="3"></content-loader>
                <input v-else :value="polyjuiceAddress" id="polyjuiceAddress" class="bg-gray-200 ml-2 flex-1 w-0 truncate" />
              </div>
              <div class="ml-4 flex-shrink-0">
                <a @click="copy('polyjuiceAddress')" class="font-medium text-yellow-600 font-semibold hover:text-yellow-500">
                  Copy
                </a>
              </div>
            </div>
            </div>

          </div>
          <div class="py-8 px-6 text-center bg-gray-50 lg:flex-shrink-0 lg:flex lg:flex-col lg:justify-center lg:p-12">
            <p class="text-lg leading-6 font-medium text-gray-900">
              You have
            </p>
            <div class="mt-4 flex items-center justify-center text-5xl font-extrabold text-gray-900">
              <span v-if="isSync">
                0
              </span>
              <span v-else>
                {{ ckETHBalance }}
              </span>
              <span class="ml-3 text-xl font-medium text-gray-500">
                ckETH
              </span>
            </div>
             <div class="mt-4 pt-2 border-t-2 flex items-center justify-center text-xl font-extrabold text-green-600">
              <span v-if="isSync">
                0
              </span>
              <span v-else>
                {{ ckbBalance }}
              </span>
              <span class="ml-3 text-xs font-medium text-green-500">
                CKB
              </span>
            </div>
            <p class="mt-4 text-sm">
              <a href="#deposit" class="font-medium text-gray-500 underline">
                Click here to make a deposit ckETH to your account.
              </a>
            </p>
            <div class="mt-6">
              <div v-if="!fancyName" class="rounded-md shadow">
                <a href="#" v-if="isSync" class="flex items-center justify-center px-5 py-3 border border-transparent bg-opacity-80 text-base font-medium rounded-md text-white bg-gray-800">
                  Claim!
                </a>
                <a href="#" @click="claim" v-else class="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-800 hover:bg-gray-900">
                  Claim!
                </a>
              </div>
              <div v-else class="rounded-md shadow">
                <button disabled @click="claim" class="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-800 hover:bg-gray-900">
                  {{ fancyName }}
                </button>
              </div>
            </div>
            <div v-if="!fancyName" class="mt-4 text-sm">
              <a href="#" @click="randomName('sample')" class="font-semibold text-indigo-500">
                Click to get a free sample
              </a>
              <div v-if="freeSample" class="mt-4 pt-2 border-t flex items-center justify-center text-xl font-extrabold text-indigo-600">
                <span>
                  {{ freeSample }}
                </span>
            </div>
            </div>
                        <div v-else class="mt-4 text-sm">
              <span class="font-semibold text-indigo-500">
                You're already claimed own Fancy Name and is visible above!
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<div id="deposit" class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="max-w-md mx-auto lg:max-w-5xl">
        <div class="rounded-lg bg-gray-100 px-6 py-8 sm:p-10 lg:flex lg:items-center">
          <div class="flex-1">
            <div>
              <h3 class="inline-flex px-4 py-1 rounded-full text-sm font-semibold tracking-wide uppercase bg-white text-gray-800">
                Awesome news!
              </h3>
            </div>
            <div class="mt-4 text-lg text-gray-600">
              If you use the bridge and test how it works before generating the name, you have a chance to roll a better name!
            </div>
            <div class="mt-4 text-lg text-gray-600">
                <h4 class="flex-shrink-0 pr-4 text-sm tracking-wider font-semibold uppercase text-yellow-600">
                 Layer 2 Deposit Address
                </h4>
                <div class="flex-1 border-t-2 mt-2 border-gray-200"></div>
            <div class="pl-3 pr-4 py-3 flex items-center bg-gray-200 justify-between text-sm">
              <div class="w-0 flex-1 flex items-center">
                <!-- Heroicon name: solid/paper-clip -->
                <svg class="flex-shrink-0 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd" d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z" clip-rule="evenodd" />
                </svg>
                <content-loader v-if="isSync" class="ml-2" width="100" height="3"></content-loader>
                <input v-else :value="depositAddress.addressString" id="depositAddress" class="bg-gray-200 ml-2 flex-1 w-0 truncate" />
              </div>
              <div class="ml-4 flex-shrink-0">
                <a @click="copy('depositAddress')" class="font-medium text-yellow-600 font-semibold hover:text-yellow-500">
                  Copy
                </a>
              </div>
            </div>

            <span class="text-xs font-semibold text-yellow-600">
              After going to the bridge, select any number of ETH, delete the default <u>Recipient</u> from field and enter the copied string from above in the <u>Recipient</u> field.
            </span>
            </div>
          </div>
          <div class="mt-6 rounded-md shadow lg:mt-0 lg:ml-10 lg:flex-shrink-0">
            <a href="https://force-bridge-test.ckbapp.dev/bridge/Ethereum/Nervos?xchain-asset=0x0000000000000000000000000000000000000000" target="_blank" class="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-gray-900 bg-white hover:bg-gray-50">
             Go to Force-Bridge!
            </a>
          </div>
        </div>
      </div>
</div>

    </div>
</template>

<script>

// This function detects most providers injected at window.ethereum
import detectEthereumProvider from '@metamask/detect-provider';

import { uniqueNamesGenerator, adjectives, colors, animals, starWars } from 'unique-names-generator';

const { AddressTranslator } = require('nervos-godwoken-integration');

import { defineComponent, useContext, ref, useAsync } from '@nuxtjs/composition-api'

import * as sudtContract from '~/build/contracts/ERC20.json';
import * as fancyContract from '~/build/contracts/FancyNames.json';


import { ContentLoader } from 'vue-content-loader'

export default defineComponent({
  components: {
    ContentLoader
  },

  setup() {
    const { $web3, $config } = useContext()

    const noWeb3 = ref(false);
    const isSync = ref(true);
    const notification = ref(false);
    const accounts = ref([]);
    const fancyName = ref('');

    const freeSample = ref('');

    const ckbBalance = ref('')
    const ckETHBalance = ref('')

    const depositAddress = ref('')
    const ethereumAddress = ref('')
    const polyjuiceAddress = ref('')

    const getEthereumAddress = async () => {
      ethereumAddress.value = window.ethereum.selectedAddress
    }

    const getLayer2Address = async () => {
      const addressTranslator = new AddressTranslator();
      const layer2DepositAddress = await addressTranslator.getLayer2DepositAddress($web3, window.ethereum.selectedAddress);

      depositAddress.value = layer2DepositAddress
    }

    const getPolyjuiceAddress = async () => {
      const addressTranslator = new AddressTranslator();
      
      polyjuiceAddress.value = addressTranslator.ethAddressToGodwokenShortAddress(window.ethereum.selectedAddress);
    }

    const getCKBBalance = async () => {
      let balance = await $web3.eth.getBalance(window.ethereum.selectedAddress);

      ckbBalance.value = balance / 10 ** 8;
    }

    const getCKETHBalance = async () => {
      const contract = new $web3.eth.Contract(sudtContract.abi, $config.sudtProxyContractAddress);
      
      let balance = 0;

      try {
        balance = await contract.methods.balanceOf(polyjuiceAddress.value).call({
              from: window.ethereum.selectedAddress
        });
      } catch(error) {
        console.log(error)
      } 

      ckETHBalance.value = balance ? balance / 10 ** 18 : 0;
    }


    const getFancyName = async () => {
      const contract = new $web3.eth.Contract(fancyContract.abi, $config.fancyContractAddress);

      try {
        const name = await contract.methods.read().call({
              from: window.ethereum.selectedAddress
        });

        fancyName.value = name;

      } catch(error) {
        console.log(error)
      } 
    }

    const copy = (id) => {
      var copyText = document.getElementById(id);

      /* Select the text field */
      copyText.select();

      /* Copy the text inside the text field */
      document.execCommand("copy");

      /* Alert the copied text */
      alert("Copied the text: " + copyText.value);
    }

    const randomName = (type = 'main') => {
        let dictionaries = [adjectives, colors, animals];

        if (ckETHBalance.value > 0) dictionaries.push(starWars);

        const name = uniqueNamesGenerator({
          style: 'capital',
          separator: ' ',
          dictionaries
        });

        if (type == 'sample') freeSample.value = name

        return name;
    }

    const claim = async () => {
     const contract = new $web3.eth.Contract(fancyContract.abi, $config.fancyContractAddress);

      try {
        const tx = contract.methods.claim(randomName()).send({
            from: window.ethereum.selectedAddress,
            gas: 6000000,
          });

          notification.value = true;

          tx.on('transactionHash', hash => notification.value = false );

          //0x9d9dce92c1d4450f4ba9f00a8d511ba12c45f32563153f3c33db9d435a098bee
      } catch (error) {
          console.error(error);
          alert('There was an error sending your transaction. Please check developer console.');
      }
    }

    const connect = async () => {
      window.ethereum.enable()
    }

    const providerInit = async () => {
      const provider = await detectEthereumProvider();

      if (provider) {
        init();
        windowInit()

        accounts.value = window.ethereum._state.accounts
      } else {
        noWeb3.value = true
      }
    }

    const init = async () => {
        await getLayer2Address()
        await getEthereumAddress()
        await getPolyjuiceAddress()

        //Balances
        await getCKBBalance();
        await getCKETHBalance();

        //
        await getFancyName();

        isSync.value = false;
    }

    const windowInit = async () => {
      window.ethereum.on('accountsChanged', async function (accounts) {
        isSync.value = true;

        init()
      })
    }

    providerInit();

    return { isSync, ckbBalance, ckETHBalance, notification, fancyName, depositAddress, polyjuiceAddress, ethereumAddress, freeSample, accounts, noWeb3, claim, copy, randomName, connect }
  }
})
</script>
