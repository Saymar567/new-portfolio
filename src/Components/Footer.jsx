function Footer(){
    const date = new Date()
    
    return(
    
<footer class="bg-white-700">
    <div class="w-full mx-auto max-w-screen-xl p-2 md:flex md:items-center md:justify-between">
      <span class="text-sm text-black-500 sm:text-center dark:text-gray-400">© {date.getFullYear()} Saymar WD™. All Rights Reserved.
    </span>
    <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
            <a href= "https://www.linkedin.com/in/miguel-angel-jimenez-calcedo-web-dev/" target="_blank" class="hover:underline me-4 md:me-6"> <img src="/images/icons8-linkedin-logo-30.png" alt="linkedin" /> </a>
        </li>
        <li>
            <a href="https://github.com/Saymar567" target="_blank" class="hover:underline me-4 md:me-6"><img src="/images/icons8-github-30.png" alt="github" /></a>
        </li>
        <li>
            <a href="mailto:majc1907@gmail.com" class="hover:underline me-4 md:me-6"><img src="/images/icons8-mail-30.png" alt="mail" /></a>
        </li>
       
    </ul>
    </div>
</footer>

    
    )
}
export default Footer