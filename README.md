# Nuxt 3 + Vue + Tailwind CSS - Test

## Komponenty

Použité komponenty:

```bash
nuxt-icon: pro ikony
```

Nastavení aplikace:

```bash
Vytvořte /.env - cesty k api a obrázkům, zasláno v emailu
```

Zprovoznění aplikace:

```bash
# npm
1) npm install
2) npm run dev - lokální vývoj
3) npm run build - příprava balíčku pro deploy na server
4) npm run preview - zobrazení webu pro deploy
```

Doporučení:

Chtělo by to requesty z API cachovat, tak aby se stránky rychleji načítaly. Nyní se načítá stránka kolem 500ms.
Dle lighthouse nesplňuje web přístupnost co se týče barev - šedé písmo je moc světlé...
Pro výkon by pak bylo vhodné mít obrázky nové generace jako např. webp. Jpg nejsou v dobrém rozlišení.
