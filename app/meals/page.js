import Link from 'next/link';
import classes from './page.module.css';
import MealsGrid from '@/components/meals/meals-grid';
import { getMeals } from '@/lib/meal';

export default async function MealsPage(params) {
    const meals = await getMeals();

    return (
        <>
            <header className={classes.header}>
                <h1>
                    Delisious meals, cteated{' '}
                    <span className={classes.highligt}>by you</span>
                </h1>
                <p>Choose your favourite resipe and cook it yourself. It is easy and fun!</p>
                <p className={classes.cta}>
                    <Link href='/meals/share'>
                        Share Your Favorite Recipe
                    </Link>
                </p>
            </header>
            <main className={classes.main}>
                    <MealsGrid meals={meals}/>
            </main>
        </>
    )

}