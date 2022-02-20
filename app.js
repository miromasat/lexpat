Vue.createApp({
      data() {
        return {
          AppName: 'Lexpat BankBot',
          SelectedLanguage: null,
          LanguageList: [
            {id: 'sk', name: 'Slovensky', greeting: 'Ahoj'},
            {id: 'cz', name: 'Čeština', greeting: 'Ahoj'},
            {id: 'hu', name: 'Magyar', greeting: 'Szia'},
            {id: 'de', name: 'Deutch', greeting: 'Hallo'},
            {id: 'en', name: 'English', greeting: 'Hello'}
          ],
          Messages: [],
          Prompt: ''
        }
      },
      beforeMount: function () {
        this.SelectedLanguage = this.LanguageList[0]
        var newMessages = []
        newMessages.push({text: this.SelectedLanguage.greeting, activeClass: 'justify-start'})
        this.Messages = newMessages
      },
      methods: {
        
        reset() {
            var newMessages = []
            newMessages.push({text: this.SelectedLanguage.greeting, activeClass: 'justify-start'})
            this.Messages = newMessages
        }, 
        reply() {
            
            if (this.Prompt == '') { return }
                  
            var newMessages = this.Messages
            newMessages.push({ text:this.Prompt, activeClass: 'justify-end' })
            this.Messages = newMessages
            this.Prompt = ''
          
        }
      }
    }).mount('#app')